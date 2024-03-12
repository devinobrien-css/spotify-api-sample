import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/useGlobalContext';
import { getTopArtists } from '../api';

export const TopArtists = () => {
  const { token, access_token } = useGlobalContext();

  const { data, isLoading } = useQuery({
    queryKey: ['top-artists'],
    queryFn: async () => await getTopArtists(token),
    enabled: !!token,
  });

  console.log(data);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="m-auto rounded-lg bg-slate-800 p-12">
        <h1 className="text-4xl font-bold text-slate-100">Top Artists</h1>

        <div className="flex flex-col gap-y-2">
          {data?.artists?.map((artist: any) => (
            <div key={artist.id} className="rounded bg-slate-600 p-2 shadow">
              <img
                src={artist.images[0].url}
                alt="Artist"
                className="size-24"
              />
              <p className="text-slate-100">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
