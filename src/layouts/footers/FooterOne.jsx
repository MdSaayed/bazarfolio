import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = () => {
  const menuItems = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Works', path: '#works' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <footer className="bg-[url('/assets/images/footer-bg-1.png')] bg-cover bg-blue-gray pb-16">
      <div className="container padding-b-0">
        <div className="bg-dark-slate rounded-4xl py-14 px-6 md:px-12 lg:px-20">

          <div className="flex items-center gap-6 sm:gap-10 md:gap-[72px] border-b border-white/50 pb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-primary text-white">
              Let’s Contact
            </h2>
            <svg
              className="w-10 sm:w-12 md:w-14 lg:w-[49px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 49 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.5936 0.650371C44.6026 0.643299 44.6119 0.636049 44.6209 0.628978L48.1572 5.15521L48.0626 5.22912C37.245 13.7526 36.1088 27.0504 41.5454 34.0089L37.0193 37.5451C32.599 31.8873 31.4996 24.0239 33.71 16.4426L4.02863 39.6323L0.492524 35.1062L30.1743 11.9163C22.2833 12.2271 14.9189 9.25776 10.4986 3.59998L15.0246 0.0638697C20.4723 7.0366 33.6935 9.1457 44.5936 0.650371Z"
                fill="#0E0F11"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
            <div>
              <img
                src="/assets/images/logo-white.png"
                alt="Logo"
                className="max-w-[160px]"
              />
            </div>

            <div className="text-white">
              <h3 className="text-xl font-semibold leading-primary mb-8">
                Address
              </h3>
              <div className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                <p className="text-primary hover:underline transition duration-200">
                  +23 (603) 555-0123
                </p>
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-xl font-semibold leading-primary mb-8">
                Main Section
              </h3>
              <nav className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item?.path}
                    className={`block hover:text-primary transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="text-white">
              <h3 className="text-xl font-semibold leading-primary mb-8">
                Support
              </h3>
              <nav className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                {['Faq’s', 'Term & Conditions', 'Privacy Policy', 'Help'].map(
                  (item, idx) => (
                    <Link
                      key={idx}
                      to={`/${item
                        .toLowerCase()
                        .replace(/[^a-z]/gi, '-')
                        .replace(/-+/g, '-')}`}
                      className="block hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-4 border-t border-white/50 gap-6">
            <div className='flex items-center gap-4'>
                <Link to='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 29" fill="none">
                    <ellipse cx="13.8462" cy="14.8032" rx="13.8462" ry="13.8462" fill="#050608"/>
                    <path d="M14.1538 6.95703C12.5716 6.95703 11.0248 7.42622 9.70925 8.30527C8.39366 9.18433 7.36828 10.4338 6.76278 11.8956C6.15727 13.3574 5.99885 14.9659 6.30753 16.5178C6.61621 18.0696 7.37814 19.4951 8.49696 20.6139C9.61578 21.7327 11.0412 22.4946 12.5931 22.8033C14.1449 23.112 15.7535 22.9536 17.2153 22.3481C18.6771 21.7426 19.9265 20.7172 20.8056 19.4016C21.6846 18.086 22.1538 16.5393 22.1538 14.957C22.1538 12.8353 21.311 10.8005 19.8107 9.30018C18.3104 7.79989 16.2755 6.95703 14.1538 6.95703ZM16.1812 14.1991L16.0485 15.3139C16.0428 15.3656 16.0181 15.4134 15.9793 15.448C15.9404 15.4826 15.8901 15.5016 15.838 15.5012H14.6801V18.8065C14.6804 18.846 14.6651 18.8839 14.6375 18.9121C14.6099 18.9403 14.5722 18.9565 14.5328 18.957H13.3538C13.3342 18.9568 13.3148 18.9526 13.2968 18.9448C13.2787 18.9371 13.2624 18.9258 13.2487 18.9118C13.235 18.8977 13.2243 18.8811 13.217 18.8628C13.2098 18.8446 13.2062 18.8251 13.2064 18.8054L13.2128 15.5012H12.3359C12.2801 15.5012 12.2265 15.4791 12.1871 15.4396C12.1476 15.4001 12.1254 15.3465 12.1254 15.2907V14.177C12.1254 14.1212 12.1476 14.0676 12.1871 14.0282C12.2265 13.9887 12.2801 13.9665 12.3359 13.9665H13.2064V12.8865C13.2064 11.637 13.9507 10.957 15.038 10.957H15.9296C15.9854 10.957 16.039 10.9792 16.0785 11.0187C16.1179 11.0582 16.1401 11.1117 16.1401 11.1676V12.1055C16.1401 12.1613 16.1179 12.2148 16.0785 12.2543C16.039 12.2938 15.9854 12.316 15.9296 12.316H15.3833C14.7917 12.3255 14.6801 12.6086 14.6801 13.0318V13.9633H15.977C16.0063 13.964 16.0352 13.9708 16.0618 13.9833C16.0884 13.9958 16.1121 14.0138 16.1313 14.036C16.1506 14.0582 16.1649 14.0842 16.1735 14.1123C16.1821 14.1404 16.1847 14.17 16.1812 14.1991Z" fill="white"/>
                  </svg>
                </Link>
                <Link to='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 29" fill="none">
                    <ellipse cx="14" cy="14.8032" rx="13.8462" ry="13.8462" fill="#050608"/>
                    <path d="M17.6538 7.95703H10.6538C8.72184 7.95703 7.15384 9.52503 7.15384 11.457V18.457C7.15384 20.389 8.72184 21.957 10.6538 21.957H17.6538C19.5858 21.957 21.1538 20.389 21.1538 18.457V11.457C21.1538 9.52503 19.5858 7.95703 17.6538 7.95703ZM14.1538 18.457C12.2218 18.457 10.6538 16.889 10.6538 14.957C10.6538 13.025 12.2218 11.457 14.1538 11.457C16.0858 11.457 17.6538 13.025 17.6538 14.957C17.6538 16.889 16.0858 18.457 14.1538 18.457ZM17.8988 11.891C17.5138 11.891 17.1988 11.576 17.1988 11.191C17.1988 10.806 17.5138 10.491 17.8988 10.491C18.2838 10.491 18.5988 10.806 18.5988 11.191C18.5988 11.576 18.2838 11.891 17.8988 11.891Z" fill="white"/>
                    <path d="M14.1538 17.0574C15.3136 17.0574 16.2538 16.1172 16.2538 14.9574C16.2538 13.7976 15.3136 12.8574 14.1538 12.8574C12.994 12.8574 12.0538 13.7976 12.0538 14.9574C12.0538 16.1172 12.994 17.0574 14.1538 17.0574Z" fill="white"/>
                  </svg>
                </Link>
                <Link to='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 29" fill="none">
                    <ellipse cx="14.1538" cy="14.8032" rx="13.8462" ry="13.8462" fill="#050608"/>
                    <path d="M20.298 7.95703H8.31737C7.75967 7.95703 7.30768 8.40905 7.30768 8.96673V20.9473C7.30768 21.505 7.7597 21.957 8.31737 21.957H20.298C20.8557 21.957 21.3077 21.505 21.3077 20.9473V8.96673C21.3077 8.40902 20.8557 7.95703 20.298 7.95703ZM12.2736 18.5391H10.5688V13.4101H12.2736V18.5391ZM11.4212 12.7097H11.4101C10.838 12.7097 10.468 12.3159 10.468 11.8237C10.468 11.3204 10.8493 10.9375 11.4326 10.9375C12.0158 10.9375 12.3746 11.3204 12.3857 11.8237C12.3857 12.3159 12.0158 12.7097 11.4212 12.7097V12.7097ZM18.4208 18.5391H16.7162V15.7952C16.7162 15.1056 16.4694 14.6353 15.8525 14.6353C15.3816 14.6353 15.1011 14.9525 14.9778 15.2588C14.9328 15.3684 14.9218 15.5215 14.9218 15.6748V18.5391H13.217C13.217 18.5391 13.2394 13.8913 13.217 13.4101H14.9218V14.1363C15.1483 13.7868 15.5537 13.2897 16.4582 13.2897C17.5798 13.2897 18.4208 14.0228 18.4208 15.5981V18.5391Z" fill="white"/>
                  </svg>
                </Link>
                <Link to='https://www.dribbble.com' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 29 29" fill="none">
                    <ellipse cx="14.3077" cy="14.8032" rx="13.8462" ry="13.8462" fill="#050608"/>
                    <path d="M14.9297 14.7177L18.0802 19.224H16.7872L14.2163 15.5468V15.5466L13.8389 15.0068L10.8357 10.7109H12.1286L14.5522 14.1778L14.9297 14.7177Z" fill="white"/>
                    <path d="M19.9488 7.95703H8.97428C8.13884 7.95703 7.46155 8.63433 7.46155 9.46976V20.4443C7.46155 21.2797 8.13884 21.957 8.97428 21.957H19.9488C20.7843 21.957 21.4615 21.2797 21.4615 20.4443V9.46976C21.4615 8.63433 20.7843 7.95703 19.9488 7.95703ZM16.3912 19.8293L13.7896 16.043L10.5324 19.8293H9.69059L13.4158 15.4992L9.69059 10.0776H12.5319L14.9954 13.6629L18.0798 10.0776H18.9216L15.3693 14.2068H15.3691L19.2325 19.8293H16.3912Z" fill="white"/>
                  </svg>
                </Link>
            </div>

            <div>
                <p className="text-white font-normal text-sm text-center md:text-left tracking-wide">
                    &copy; Portfolio – All rights reserved. Designed by UIbazar 
                </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
