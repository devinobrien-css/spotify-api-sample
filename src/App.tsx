import { Icon } from '@iconify/react';
import { SpotifyProfile } from './components/SpotifyProfile';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-700">
      <div className="flex h-screen w-full flex-col">
        <div className="m-auto ">
          <div className="mx-auto flex w-fit gap-x-2">
            <Icon icon="vscode-icons:file-type-vite" className="size-24" />
            <Icon
              icon="fa-solid:plus"
              className="my-auto size-12 text-slate-300"
            />
            <Icon icon="vscode-icons:file-type-reactjs" className="size-24" />
            <Icon
              icon="fa-solid:plus"
              className="my-auto size-12 text-slate-300"
            />
            <Icon icon="logos:spotify-icon" className="size-24" />
          </div>
          <h1 className="mt-10 text-center text-4xl font-bold text-white">
            Vite + React + Spotify API
          </h1>
        </div>
      </div>
      <SpotifyProfile />
    </div>
  );
};

export default App;
