import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = () => {
    return (
        <footer className="bg-[url('/assets/images/footer-bg-1.png')] bg-cover bg-blue-gray pb-16">
            <div className="container padding-b-0">
                <div className="bg-dark-slate rounded-4xl py-14 px-6 md:px-12 lg:px-20">
                    
                    {/* Top section */}
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
                                fill="white"
                            />
                        </svg>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
                        
                        {/* Logo */}
                        <div>
                            <img src="/assets/images/logo-white.png" alt="Logo" className="max-w-[160px]" />
                        </div>

                        {/* Address */}
                        <div className="text-white">
                            <h3 className="text-xl font-semibold leading-primary mb-8">Address</h3>
                            <div className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                <p className="text-primary hover:underline transition duration-200">+23 (603) 555-0123</p>
                            </div>
                        </div>

                        {/* Main Section Links */}
                        <div className="text-white">
                            <h3 className="text-xl font-semibold leading-primary mb-8">Main Section</h3>
                            <nav className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                                {['About', 'Services', 'Works', 'Blog', 'Contact'].map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/${item.toLowerCase()}`}
                                        className="block hover:text-primary transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Support Links */}
                        <div className="text-white">
                            <h3 className="text-xl font-semibold leading-primary mb-8">Support</h3>
                            <nav className="space-y-4 text-base font-normal leading-relaxed tracking-wide">
                                {['Faq’s', 'Term & Conditions', 'Privacy Policy', 'Help'].map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/${item.toLowerCase().replace(/[^a-z]/gi, '-')}`}
                                        className="block hover:text-primary transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/50 gap-6">
                        <div className='flex items-center gap-4'>
                            <Link to='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none">
                                    <ellipse cx="13.8462" cy="13.977" rx="13.8462" ry="13.8462" fill="#050608"/>
                                    <path d="M14.1538 6.13086C12.5716 6.13086 11.0248 6.60005 9.70925 7.4791C8.39366 8.35815 7.36828 9.60758 6.76278 11.0694C6.15727 12.5312 5.99885 14.1397 6.30753 15.6916C6.61621 17.2434 7.37814 18.6689 8.49696 19.7877C9.61578 20.9065 11.0412 21.6685 12.5931 21.9771C14.1449 22.2858 15.7535 22.1274 17.2153 21.5219C18.6771 20.9164 19.9265 19.891 20.8056 18.5754C21.6846 17.2598 22.1538 15.7131 22.1538 14.1309C22.1538 12.0091 21.311 9.9743 19.8107 8.474C18.3104 6.97371 16.2755 6.13086 14.1538 6.13086ZM16.1812 13.373L16.0485 14.4877C16.0428 14.5394 16.0181 14.5872 15.9793 14.6218C15.9404 14.6564 15.8901 14.6754 15.838 14.6751H14.6801V17.9803C14.6804 18.0198 14.6651 18.0578 14.6375 18.086C14.6099 18.1142 14.5722 18.1303 14.5328 18.1309H13.3538C13.3342 18.1306 13.3148 18.1264 13.2968 18.1187C13.2787 18.1109 13.2624 18.0997 13.2487 18.0856C13.235 18.0715 13.2243 18.0549 13.217 18.0366C13.2098 18.0184 13.2062 17.9989 13.2064 17.9793L13.2128 14.6751H12.3359C12.2801 14.6751 12.2265 14.6529 12.1871 14.6134C12.1476 14.5739 12.1254 14.5204 12.1254 14.4645V13.3509C12.1254 13.295 12.1476 13.2415 12.1871 13.202C12.2265 13.1625 12.2801 13.1403 12.3359 13.1403H13.2064V12.0603C13.2064 10.8109 13.9507 10.1309 15.038 10.1309H15.9296C15.9854 10.1309 16.039 10.153 16.0785 10.1925C16.1179 10.232 16.1401 10.2855 16.1401 10.3414V11.2793C16.1401 11.3351 16.1179 11.3887 16.0785 11.4281C16.039 11.4676 15.9854 11.4898 15.9296 11.4898H15.3833C14.7917 11.4993 14.6801 11.7824 14.6801 12.2056V13.1372H15.977C16.0063 13.1378 16.0352 13.1447 16.0618 13.1572C16.0884 13.1697 16.1121 13.1876 16.1313 13.2098C16.1506 13.232 16.1649 13.258 16.1735 13.2861C16.1821 13.3142 16.1847 13.3438 16.1812 13.373Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link to='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none">
                                    <ellipse cx="14" cy="13.977" rx="13.8462" ry="13.8462" fill="#050608"/>
                                    <path d="M17.6538 7.13086H10.6538C8.72184 7.13086 7.15384 8.69886 7.15384 10.6309V17.6309C7.15384 19.5629 8.72184 21.1309 10.6538 21.1309H17.6538C19.5858 21.1309 21.1538 19.5629 21.1538 17.6309V10.6309C21.1538 8.69886 19.5858 7.13086 17.6538 7.13086ZM14.1538 17.6309C12.2218 17.6309 10.6538 16.0629 10.6538 14.1309C10.6538 12.1989 12.2218 10.6309 14.1538 10.6309C16.0858 10.6309 17.6538 12.1989 17.6538 14.1309C17.6538 16.0629 16.0858 17.6309 14.1538 17.6309ZM17.8988 11.0649C17.5138 11.0649 17.1988 10.7499 17.1988 10.3649C17.1988 9.97986 17.5138 9.66486 17.8988 9.66486C18.2838 9.66486 18.5988 9.97986 18.5988 10.3649C18.5988 10.7499 18.2838 11.0649 17.8988 11.0649Z" fill="white"/>
                                    <path d="M14.1538 16.2313C15.3136 16.2313 16.2538 15.291 16.2538 14.1313C16.2538 12.9715 15.3136 12.0312 14.1538 12.0312C12.994 12.0312 12.0538 12.9715 12.0538 14.1313C12.0538 15.291 12.994 16.2313 14.1538 16.2313Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link to='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none">
                                    <ellipse cx="14.1538" cy="13.977" rx="13.8462" ry="13.8462" fill="#050608"/>
                                    <path d="M20.298 7.13086H8.31737C7.75967 7.13086 7.30768 7.58288 7.30768 8.14055V20.1212C7.30768 20.6789 7.7597 21.1309 8.31737 21.1309H20.298C20.8557 21.1309 21.3077 20.6788 21.3077 20.1212V8.14055C21.3077 7.58285 20.8557 7.13086 20.298 7.13086ZM12.2736 17.7129H10.5688V12.5839H12.2736V17.7129ZM11.4212 11.8835H11.4101C10.838 11.8835 10.468 11.4897 10.468 10.9975C10.468 10.4943 10.8493 10.1113 11.4326 10.1113C12.0158 10.1113 12.3746 10.4943 12.3857 10.9975C12.3857 11.4897 12.0158 11.8836 11.4212 11.8836V11.8835ZM18.4208 17.7129H16.7162V14.969C16.7162 14.2794 16.4694 13.8091 15.8525 13.8091C15.3816 13.8091 15.1011 14.1264 14.9778 14.4326C14.9328 14.5422 14.9218 14.6954 14.9218 14.8486V17.7129H13.217C13.217 17.7129 13.2394 13.0651 13.217 12.5839H14.9218V13.3101C15.1483 12.9607 15.5537 12.4635 16.4582 12.4635C17.5798 12.4635 18.4208 13.1966 18.4208 14.7719V17.7129Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link to='https://www.dribbble.com' target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 29 28" fill="none">
                                    <ellipse cx="14.3077" cy="13.977" rx="13.8462" ry="13.8462" fill="#050608"/>
                                    <path d="M14.9297 13.8915L18.0802 18.3978H16.7872L14.2163 14.7206V14.7204L13.8389 14.1806L10.8357 9.88477H12.1286L14.5522 13.3517L14.9297 13.8915Z" fill="white"/>
                                    <path d="M19.9488 7.13086H8.97428C8.13884 7.13086 7.46155 7.80815 7.46155 8.64359V19.6181C7.46155 20.4536 8.13884 21.1309 8.97428 21.1309H19.9488C20.7843 21.1309 21.4615 20.4536 21.4615 19.6181V8.64359C21.4615 7.80815 20.7843 7.13086 19.9488 7.13086ZM16.3912 19.0031L13.7896 15.2169L10.5324 19.0031H9.69059L13.4158 14.6731L9.69059 9.2514H12.5319L14.9954 12.8367L18.0798 9.2514H18.9216L15.3693 13.3807H15.3691L19.2325 19.0031H16.3912Z" fill="white"/>
                                </svg>
                            </Link>
                        </div>

                        {/* Copyright */}
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
