import { useQuery } from '@tanstack/react-query';
import { getTopArtists } from '../api';
import { useGlobalContext } from '../context/useGlobalContext';

export const TopGenres = () => {
  const { token } = useGlobalContext();

  const { data: artists } = useQuery({
    enabled: !!token,
    queryKey: ['top-artists'],
    queryFn: async () => await getTopArtists(token),
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-100">Top Genres</h1>
      <br />
      <div className="flex w-fit flex-wrap justify-between gap-2">
        {artists?.artists?.map((artist: any) =>
          artist.genres.map((genre: string) => (
            <a
              key={genre}
              target="_blank"
              href={`https://www.google.com/search?q=${genre}`}
              className="rounded p-2 ring ring-slate-600/20 transition-all hover:bg-slate-600/20 hover:shadow"
            >
              <p className="text-center text-slate-100">{genre}</p>
            </a>
          )),
        )}
      </div>
    </>
  );
};
