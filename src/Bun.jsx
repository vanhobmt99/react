import bunimg from './assets/bun.png';

const Bun = () => {
    return (
        <div className="bg-slate-100 h-screen flex justify-center">
            <div className="text-center">
                <div className="pb-44">
                    <div className="mt-16 mb-5 ">
                        <img src={bunimg} alt="bun" className="mx-auto" />
                    </div>

                    <div className="text-3xl font-bold mb-6 ">
                        <h1>
                            Careers at Bun
                        </h1>
                    </div>

                    <div className="mx-auto text-center flex justify-center max-w-xl font-bold text-gray-600">
                        <h1>We're on a mission to make JavaScript faster and simpler with Bun, a fast all-in-one JavaScript runtime, bundler, and package manager.</h1>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mt-10 mb-14'>
                            Job Openings
                        </h1>
                    </div>
                    <div className='grid grid-cols-8 border-b-2 border-gray-500 pb-4 '>
                        <div className='col-span-2'>
                            <div className='text-left'>
                                <a href='https://google.com'>
                                    <div className='font-bold text-pink-500'>
                                        <h2>Developer Experience Engineer</h2>
                                    </div>
                                    <div className='text-gray-500'>
                                        <h3>Post 3 months ago</h3>
                                    </div>
                                </a>
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

                    <div className='grid grid-cols-8 border-b-2 border-gray-500 pb-4 pt-4'>
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

                        <div className='col-span-2 font-bold text-gray-500'>
                            <h1>Full Time</h1>
                        </div>

                    </div>

                    <div>
                        <div className="flex justify-between mt-8 border-b-2 pb-4 border-gray-500">
                            <h1 className="font-bold text-gray-500">If there isn't a job opening that matches your skills, you can email us your resume.</h1>
                            <div className="bg-pink-500 text-white  p-2  rounded-lg">
                                <button>Email my resume</button>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center space-x-2  border-b-2 pb-4 mt-2 border-gray-500">
                        <div>
                            <a href="https://google.com">
                                <h2 className='font-bold text-pink-500'>
                                    View website
                                </h2>
                            </a>
                        </div>

                        <div className="inline-block">
                            <a href="https://google.com">
                                <h2 className='font-bold text-pink-500'>
                                    Help
                                </h2>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-3 mt-2">
                        <div className="flex text-gray-500 ">
                            <h2>Power by &nbsp;</h2>
                            <a href="https://google.com">
                                <h2 className='font-bold text-pink-500'>
                                    View website
                                </h2>
                            </a>
                        </div>

                        <div className="inline-block">
                            <a href="https://google.com">
                                <h2 className='font-bold text-pink-500'>
                                    Workable
                                </h2>
                            </a>
                        </div>
                        <h1>AHIHI</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bun;
