import { useGlobalContext } from '../context/useGlobalContext';
import { useQuery } from '@tanstack/react-query';
import {
  getSongs,
  getSpotifyPlaylists,
  getSpotifyUser,
  getTopArtists,
} from '../api';
import { TopSongs } from './TopSongs';
import { TopGenres } from './TopGenres';
import { TopArtists } from './TopArtists';

export const SpotifyProfile = () => {
  const { token } = useGlobalContext();

  const { data } = useQuery({
    queryKey: ['spotify-user'],
    queryFn: async () => await getSpotifyUser(token),
    enabled: !!token,
  });

  const { data: playlistsData } = useQuery({
    queryKey: ['spotify-playlists'],
    queryFn: async () => await getSpotifyPlaylists(token),
    enabled: !!token,
  });

  return (
    <div className="flex min-h-screen flex-col p-4 md:p-24">
      <div className="m-auto w-fit rounded-lg bg-slate-800 p-12">
        <h1 className="text-4xl font-bold text-slate-100">My Account</h1>
        <a
          target="_blank"
          draggable="true"
          href={data?.external_urls?.spotify}
          className="my-2 flex gap-x-2 rounded p-2 transition-all hover:bg-slate-600/20 hover:shadow"
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
        </a>
        <br />
        <TopArtists />
        <br />
        <TopGenres />
        <br />
        <TopSongs />
        <br />
      </div>
    </div>
  );
};
