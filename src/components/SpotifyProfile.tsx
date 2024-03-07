import { useGlobalContext } from '../context/useGlobalContext';
import { useQuery } from '@tanstack/react-query';
import { getSpotifyPlaylists, getSpotifyUser } from '../api';

export const SpotifyProfile = () => {
  const { token } = useGlobalContext();

  const { data, isLoading } = useQuery({
    queryKey: ['spotify-user'],
    queryFn: async () => await getSpotifyUser(token),
  });

  const { data: playlistsData, isLoading: playlistsIsLoading } = useQuery({
    queryKey: ['spotify-playlists'],
    queryFn: async () => await getSpotifyPlaylists(token),
  });

  console.log(playlistsData);

  return (
    <div className="flex min-h-screen flex-col border">
      <div className="m-auto rounded-lg bg-slate-800 p-12">
        <h1 className="text-4xl font-bold text-slate-100">
          My Spotify Account
        </h1>

        <div className="my-2 flex gap-x-2 rounded bg-slate-600 p-2 shadow">
          <img
            src={data?.images?.[1].url}
            alt="Profile"
            className="size-24 rounded-full"
          />
          <div className=" text-slate-100">
            <p className="text-4xl font-bold">{data?.display_name}</p>
            <p className="my-2">{playlistsData?.items?.length} playlists</p>
          </div>
        </div>
      </div>
    </div>
  );
};
