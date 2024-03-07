import { Icon } from '@iconify/react';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-700'>


      <div className='w-full h-screen flex flex-col'>
        <div className='m-auto '>
          <div className='flex gap-x-2 mx-auto w-fit'>
            <Icon icon='vscode-icons:file-type-vite' className='size-24' />
            <Icon icon="fa-solid:plus" className='size-12 my-auto text-slate-300' />
            <Icon icon='vscode-icons:file-type-reactjs' className='size-24' />
            <Icon icon="fa-solid:plus" className='size-12 my-auto text-slate-300' />
            <Icon icon='logos:spotify-icon' className='size-24' />
          </div>
          <h1 className='text-4xl text-center text-white font-bold mt-10'>Vite + React + Spotify API</h1>
        </div>
      </div>

    </div>

  )
}

export default App

