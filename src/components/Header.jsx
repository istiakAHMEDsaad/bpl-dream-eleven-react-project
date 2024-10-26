import PropTypes from 'prop-types';
import coin from '../assets/coin.png';
import navLogo from '../assets/logo.png';

const Header = ({coins}) => {
  return (
    <div className='fixed top-0 w-full z-30 bg-transparent backdrop-blur-lg bg-amber-50 '>
      <div className='md:container mx-auto'>
        <div className='navbar flex justify-between'>
          <div className='navbar-start'>
            {/* Small Device Nav Item */}
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>

            <a className='btn btn-ghost bg-white'>
              <img className='w-14' src={navLogo} alt='logo' />
            </a>
          </div>
          <div className='md:navbar-end hidden lg:flex'>
            <ul className='text-base menu menu-horizontal space-x-3'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className='ml-4 bg-white rounded-md '>
            <div className='border px-8 py-2 rounded-md flex gap-x-1 font-bold '>
              <span>{coins}</span>Coin
              <img className='w-6 h-6' src={coin} alt='coin' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  coins: PropTypes.number.isRequired,
};


export default Header;
