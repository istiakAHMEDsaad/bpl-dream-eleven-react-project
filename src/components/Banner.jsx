import PropTypes from 'prop-types';
import heroImage from '../assets/bg-shadow.png';
import bannerLogo from '../assets/banner-main.png';

const Banner = ({handleCoin}) => {
  const bgImageSet = {
    backgroundImage: `url("${heroImage}")`,
    height: '28rem',
  };

  return (
    <div className='md:container mt-24 px-2 mx-auto'>
      <div
        className='w-full'
        style={{
          background: 'rgba(0,0,0, 0.9)',
          borderRadius: '1.2rem',
          maxWidth: '1280px',
          overflow: 'hidden',
          margin: 'auto'
        }}
      >
        {/* ---------- Hero Image ---------- */}
        <div style={bgImageSet} className='max-w-screen-xl'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center text-center md:space-y-3 space-y-4 mt-16'>
              <img className='w-40' src={bannerLogo} alt='bg image' />
              <h1 className='lg:text-3xl text-2xl text-white font-bold'>
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className='text-white font-medium'>Beyond Boundaries Beyond Limits</p>
              <button onClick={() => handleCoin(6000000)} className='font-bold text-lg border px-4 py-3 rounded-md bg-[#E7FE29] hover:bg-gradient-to-r hover:from-pink-300 hover:to-yellow-300 transition-all duration-150'>Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleCoin: PropTypes.func.isRequired,
};

export default Banner;
