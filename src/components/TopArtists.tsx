import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/useGlobalContext';
import { getTopArtists } from '../api';

export const TopArtists = () => {
  const { token } = useGlobalContext();
  const { data: artists, isLoading: isArtistsLoading } = useQuery({
    queryKey: ['top-artists'],
    queryFn: async () => await getTopArtists(token),
    enabled: !!token,
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-100">Top Artists</h1>
      <br />
      <div className="flex w-fit flex-wrap justify-evenly gap-2">
        {artists?.artists?.map((artist: any) => (
          <a
            key={artist.id}
            target="_blank"
            href={artist.external_urls.spotify}
            className="rounded p-2 transition-all hover:bg-slate-600/20 hover:shadow"
          >
            <img
              src={artist.images[0].url}
              alt="Artist"
              className="mx-auto size-24 rounded-full"
            />
            <p className="text-center text-slate-100">{artist.name}</p>
          </a>
        ))}
      </div>
    </>
  );
};
