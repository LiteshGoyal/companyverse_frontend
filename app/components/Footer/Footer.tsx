export default function Footer() {        
    return (
        <footer className="relative py-12 overflow-hidden bg-black lg:py-20 xl:py-24 sm:py-16 sticky">
    <div className="absolute bottom-0 left-0 transform -translate-x-12 translate-y-80 lg:translate-x-0">
        <svg className="opacity-60 blur-3xl filter" filter="blur(64px)" width="612" height="396" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M225.569 296.184c-129.505-34.7-253.236 49.082-218.753-79.613C41.3 87.876 436.205-28.039 565.71 6.662c129.505 34.701-55.432 206.876-89.916 335.571-34.484 128.695-120.721-11.348-250.225-46.049Z" fill="url(#c)" />
            <defs>
                <linearGradient id="c" x1="623.268" y1="22.085" x2="453.193" y2="459.449" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor= "var(--color-cyan-500)" />
                    <stop offset="100%" stopColor= "var(--color-purple-500)" />
                </linearGradient>
            </defs>
        </svg>
    </div>

    <div className="absolute inset-0">
        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
    </div>

    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 xl:grid-cols-7 gap-x-8 xl:gap-x-16">
            <div className="max-w-md mx-auto text-center xl:col-span-3 lg:max-w-sm lg:mx-0 lg:text-left">
                <p className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl">CompanyVerse helps businesses connect, hire, and grow faster.</p>
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                    <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md" role="button"> Get Started Today </a>
                </div>
            </div>

            <div className="overflow-hidden lg:-ml-12 lg:-my-8 bg-base-900 rounded-xl xl:col-span-4">
                <div className="p-8 sm:p-12">
                    <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 gap-x-12 xl:gap-x-16">
                        <div>
                            <h6 className="text-base font-semibold text-white">Platform</h6>

                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#about" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> About </a>
                                </li>

                                <li>
                                    <a href="#FeaturesSection" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Features </a>
                                </li>

                                <li>
                                    <a href="/companies" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Companies </a>
                                </li>

                                <li>
                                    <a href="/contact" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Contact </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-base font-semibold text-white">Resources</h6>

                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Developers </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Hiring Tools </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Newsletter </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Support </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-base font-semibold text-white">Legals</h6>

                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Guides </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal text-gray-400 transition-all transform hover:text-white duration hover:translate-x-1"> Licensing </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="mt-12 border-gray-800 sm:mt-16" />

                    <div className="flex items-center justify-between mt-6">
                        <span className="text-lg font-normal text-gray-400"> Follow us on: </span>

                        <div className="flex items-center justify-end space-x-4">
                            <a href="#" title="" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all bg-transparent rounded-full hover:bg-gray-800 duraiton-200">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                    ></path>
                                </svg>
                            </a>

                            <a href="#" title="" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all bg-transparent rounded-full hover:bg-gray-800 duraiton-200">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </a>

                            <a href="#" title="" target="_blank" rel="noopener" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all bg-transparent rounded-full hover:bg-gray-800 duraiton-200">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

    )
}