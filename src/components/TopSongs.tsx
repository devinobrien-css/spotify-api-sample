import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/useGlobalContext';
import { getSongs } from '../api';
import { useState } from 'react';
import cx from 'classnames';

export const TopSongs = () => {
  const { token } = useGlobalContext();
  const { data: songs } = useQuery({
    queryKey: ['top-tracks'],
    queryFn: async () => await getSongs(token),
    enabled: !!token,
  });

  const [currentMax, setCurrentMax] = useState(8);

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-100">Top Songs</h1>
      <br />
      <div className="flex w-fit flex-wrap justify-evenly gap-y-4">
        {songs?.items?.map(
          (song: any, index: number) =>
            index < currentMax && (
              <a
                key={song.track.id}
                target="_blank"
                href={song.track.external_urls.spotify}
                className="mx-auto w-full rounded p-2 transition-all hover:bg-slate-600/20 hover:shadow sm:w-1/2 md:w-1/4"
              >
                <img
                  src={song.track.album.images[0].url}
                  alt="Song"
                  className="mx-auto size-24 rounded"
                />
                <p className="mx-auto text-center text-slate-100">
                  {song.track.name}
                </p>
              </a>
            ),
        )}
      </div>
      <button
        onClick={() =>
          currentMax < songs?.items?.length && setCurrentMax(currentMax + 8)
        }
        className={cx(
          'mx-auto mt-8 block rounded bg-slate-600/20  p-2 hover:bg-slate-600/40',
          {
            'cursor-not-allowed': currentMax >= songs?.items?.length,
            'text-white': currentMax < songs?.items?.length,
            'text-slate-400': currentMax >= songs?.items?.length,
          },
        )}
      >
        {currentMax < songs?.items?.length ? 'Load More' : 'No More Songs'}
      </button>
    </>
  );
};
