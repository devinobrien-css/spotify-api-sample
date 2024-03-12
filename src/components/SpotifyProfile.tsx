import { useGlobalContext } from '../context/useGlobalContext';
import { useQuery } from '@tanstack/react-query';
import { getSpotifyPlaylists, getSpotifyUser } from '../api';

export const SpotifyProfile = () => {
  const { token } = useGlobalContext();

  const { data, isLoading } = useQuery({
    queryKey: ['spotify-user'],
    queryFn: async () => await getSpotifyUser(token),
    enabled: !!token,
  });

  const { data: playlistsData, isLoading: playlistsIsLoading } = useQuery({
    queryKey: ['spotify-playlists'],
    queryFn: async () => await getSpotifyPlaylists(token),
    enabled: !!token,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <div className="m-auto rounded-lg bg-slate-800 p-12">
        <h1 className="text-4xl font-bold text-slate-100">Spotify Account</h1>

        <div
          className="my-2 flex gap-x-2 rounded bg-slate-600 p-2 shadow"
          draggable="true"
        >
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

        {/* <div className="flex flex-col gap-y-2">
          {playlistsData?.items?.map(
            (playlist: any, index: number) =>
              index < 5 && (
                <div
                  key={playlist.id}
                  className="rounded bg-slate-600 p-2 shadow"
                >
                  <img
                    src={playlist.images[0].url}
                    alt="Playlist"
                    className="size-24"
                  />
                  <p className="text-slate-100">{playlist.name}</p>
                </div>
              ),
          )}
        </div> */}
      </div>
    </div>
  );
};
