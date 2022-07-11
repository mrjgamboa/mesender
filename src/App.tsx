import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div
      className='App bg-white font-sans text-base
      text-gray-900 antialiased'
    >
      <Outlet />
    </div>
  );
}
