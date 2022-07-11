import Logo from '../assets/img/logo.webp';

export default function Landing() {
  return (
    <>
      <header className='mx-auto my-7 max-w-6xl pl-7'>
        <img src={Logo} alt='messenger' className='w-10' />
      </header>
      <main className='mx-auto grid max-w-7xl grid-cols-12 items-center'>
        <h1
          className='mr-auto w-auto bg-gradient-to-tr from-indigo-500 via-purple-600 
          to-rose-400 bg-clip-text text-2xl font-extrabold text-transparent'
        >
          Hang out anytime, anywhere
        </h1>
      </main>
    </>
  );
}
