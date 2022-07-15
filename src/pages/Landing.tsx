import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.webp';

export default function Landing() {
  return (
    <>
      <header className='mx-auto my-7 max-w-6xl pl-7'>
        <img src={Logo} alt='messenger' className='w-10' />
      </header>
      <main className='mx-auto grid max-w-7xl grid-cols-12 items-center'>
        <div className='col-span-12'>
          <h1
            className='mr-auto w-auto bg-gradient-to-tr from-indigo-500 via-purple-600 
          to-rose-400 bg-clip-text text-2xl font-extrabold text-transparent'
          >
            Hang out anytime, anywhere
          </h1>
          <p>
            Messenger makes it easy and fun to stay close to your favorite
            people.
          </p>
          <form>
            <input type='text' placeholder='Email or phone number' />
            <input type='password' placeholder='Password' />
            <button
              type='submit'
              className='rounded-3xl bg-blue-500 p-4 py-2 font-semibold text-white'
            >
              Log in
            </button>
            <Link to='recover' className='underline'>
              Forgot your password?
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
