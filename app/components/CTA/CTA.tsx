
const CTA = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center md:max-w-2xl">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Build Smarter Teams. Scale Faster.</h2>
                    <p className="max-w-xl mx-auto mt-6 text-base font-normal text-gray-400 lg:text-lg sm:mt-8">Connect with skilled professionals, manage company operations, and streamline hiring through a modern platform designed for growing businesses and startups.</p>

                    <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                        <div className="relative">
                            <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                            <div className="relative">
                                <input type="email" name="" id="" placeholder="Search developers, managers, companies..." className="block w-full px-6 py-4 text-white placeholder-gray-500 bg-black border border-transparent rounded-full sm:py-5 focus:border-transparent focus:ring-0" />
                            </div>
                        </div>
                        <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                            <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">GET STARTED</button>
                        </div>
                    </form>

                    <p className="mt-8 text-sm font-normal text-gray-500">Trusted by growing companies and professionals worldwide</p>
                </div>
            </div>
        </section>
    );
}

export default CTA;