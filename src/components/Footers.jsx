import footerLogo from '../assets/logo-footer.png';
import heroImage from '../assets/bg-shadow.png';

const Footers = () => {
  const bgImageSet = {
    backgroundImage: `url("${heroImage}")`,
    // height: '28rem',
    borderRadius: '0.8rem',
    maxWidth: '1280px',
  };
  return (
    <>
      <footer className='text-white relative'>
        <section className='max-w-screen-xl mx-auto rounded-2xl absolute left-0 right-0 top-[-100px] z-20'>
          <div className='rounded-2xl p-5 border bg-white/30'>
            <div className='bg-gradient-to-tr from-blue-200 via-white to-orange-200 rounded-2xl'>

              <div className='space-y-3 px-5 md:py-36 py-14 flex flex-col items-center justify-center ' style={bgImageSet}>
                <h2 className='text-black text-2xl text-center md:text-3xl font-bold'>Subscribe to our Newsletter</h2>
                <p className='md:text-lg text-sm text-neutral-800 text-center'>Get the latest updates and news right in your inbox!</p>
                <div className='flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:gap-x-3'>
                  <input className='text-black text-center py-3 md:px-10 md:py-0 rounded-lg' type="text" placeholder='Enter your email' />
                  <button className='text-black font-bold border md:px-8 md:py-3 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400'>Subscribe</button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className='bg-[#06091A] absolute left-0 right-0 pt-64 md:pt-96'>
          <div className='pt-10'>
            <img className='mx-auto' src={footerLogo} alt='' />
          </div>

          <section className='footer p-10 flex flex-col md:flex-row justify-between'>
            {/* 1 */}
            <nav className=''>
              <h6 className='text-lg'>About Us</h6>
              <div className='font-normal text-gray-500'>
                <p>
                  We are a passionate team <br />
                </p>
                <p>
                  dedicated to providing the best <br />
                </p>
                <p>
                  services to our customers <br />
                </p>
              </div>
            </nav>

            {/* 2 */}
            <nav>
              <h6 className='text-lg'>Quick Links</h6>
              <div className='flex flex-col justify-center font-normal text-gray-500'>
                <a className='link link-hover'>Home</a>
                <a className='link link-hover'>Services</a>
                <a className='link link-hover'>About</a>
                <a className='link link-hover'>Contact</a>
              </div>
            </nav>

            {/* 3 */}
            <form>
              <h6 className='text-lg'>Subscribe</h6>
              <fieldset className='form-control'>
                <label className='label'>
                  <p className='font-normal text-gray-500'>
                    Subscribe to our newsletter for <br />the latest updates.
                  </p>
                </label>
                <div className='join text-black'>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    className='input-bordered join-item pl-4'
                  />
                  <button className='btn text-black font-bold join-item bg-gradient-to-r from-pink-400 to-yellow-400'>
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </section>

          {/* Divider */}
          <hr className='border-b border-gray-800 max-w-screen-2xl mx-auto' />
          {/* Copyright */}
          <section className='py-5'>
            <p className='text-sm text-gray-500 font-normal text-center mx-auto'>
              &copy;{new Date().getFullYear()} Istiak Ahmed Saad All Rights
              Reserved.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footers;

/*
We are a passionate team dedicated to providing the best services to our customers.
*/
