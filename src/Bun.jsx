import bunimg from './assets/bun.png';

const Bun = () => {
    return (
        <div className="bg-slate-100 h-screen flex justify-center">
            <div className="text-center mx-auto">
                <div className="pb-30">
                    <div className="mt-16 mb-5 pb-10">
                        <img src={bunimg} alt="bun" className="mx-auto" />
                    </div>

                    <div className="text-3xl font-bold mb-6">
                        <h1>
                            Careers at Bun
                        </h1>
                    </div>

                    <div className='w-1/2 mx-auto text-base'>
                        <h1>We're on a mission to make JavaScript faster and simpler with Bun, a fast all-in-one JavaScript runtime, bundler, and package manager.</h1>
                    </div>
                </div>

                <div className="bg-gray-200">
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mt-10 mb-14'>
                            Job Openings
                        </h1>
                    </div>
                    <div className='grid grid-cols-8 border-b-2 border-gray-500 pb-4'>
                        <div className='col-span-2'>
                            <div className='text-left'>
                                <div className='font-bold text-pink-500'>
                                    <h2>Developer Experience Engineer</h2>
                                </div>
                                <div className='text-gray-500'>
                                    <h3>Post 3 months ago</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div className='font-bold text-gray-500'>
                                <h2>On site</h2>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div className='font-bold text-gray-500 w-3/4 text-left'>
                                <h2>San Francisco, California, United States</h2>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-8 border-b-2 border-gray-500 mp-4 mt-5'>
                        <div className='col-span-2'>
                            <div className='text-left'>
                                <div className='font-bold text-pink-500'>
                                    <h2>Run time Engineer</h2>
                                </div>
                                <div className='text-gray-500'>
                                    <h3>Post 3 months ago</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div className='font-bold text-gray-500'>
                                <h2>On site</h2>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div className='font-bold text-gray-500 w-3/4 text-left'>
                                <h2>San Francisco, California, United States</h2>
                            </div>
                        </div>
                        <div className='col-span-2 font-bold text-gray-400'>
                            <h1>Full Time</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bun;
