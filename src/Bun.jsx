import React from 'react';
import bunimg from './assets/bun.png';
import { CiLink } from 'react-icons/ci';

const Bun = () => {
    return (
        <div className="bg-slate-100 h-screen flex justify-center">
            <div className="text-center">
                <div className="pb-44">
                    <img src={bunimg} alt="bun" className="mx-auto" />

                    <h1 className="text-3xl font-bold mb-6">Careers at Bun</h1>

                    <div className="mx-auto text-center max-w-xl font-bold text-gray-600">
                        <p>
                            We're on a mission to make JavaScript faster and simpler with Bun, a fast all-in-one JavaScript runtime, bundler, and package manager.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mt-10 mb-14">Job Openings</h1>

                    <div className="grid grid-cols-8 border-b-2 border-gray-500 pb-4">
                        <div className="col-span-2">
                            <a href="https://google.com">
                                <h2 className="font-bold text-pink-500">Developer Experience Engineer</h2>
                                <p className="text-gray-500">Post 3 months ago</p>
                            </a>
                        </div>

                        <div className="col-span-2">
                            <h2 className="font-bold text-gray-700">On site</h2>
                        </div>

                        <div className="col-span-2">
                            <p className="text-gray-700 w-3/4">San Francisco, California, United States</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-8 border-b-2 border-gray-500 pb-4 pt-4">
                        <div className="col-span-2">
                            <div>
                                <h2 className="font-bold text-pink-500">Run time Engineer</h2>
                                <p className="text-gray-500">Post 3 months ago</p>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <h2 className="font-bold text-gray-700">On site</h2>
                        </div>

                        <div className="col-span-2">
                            <p className="text-gray-700 w-3/4">San Francisco, California, United States</p>
                        </div>

                        <div className="col-span-2 text-gray-600">
                            <h1>Full Time</h1>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8 border-b-2 pb-4 border-gray-500">
                        <p className="text-gray-700">
                            If there isn't a job opening that matches your skills, you can email us your resume.
                        </p>
                        <div className="bg-pink-500 text-white p-2 rounded-lg">
                            <button>Email my resume</button>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-3 border-b-2 pb-4 mt-2 border-gray-500">
                        <div>
                            <a href="https://google.com">
                                <h2 className="font-bold text-pink-500">View website</h2>
                            </a>
                        </div>

                        <div className="inline-block">
                            <a href="https://google.com">
                                <h2 className="font-bold text-pink-500">Help</h2>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-3 mt-2">
                        <div className="flex text-gray-500">
                            <h2>Powered by&nbsp;</h2>
                            <a href="https://google.com" className="font-bold text-pink-500">
                                View website
                            </a>
                        </div>

                        <div>
                            <a href="https://google.com">
                                <h2 className="font-bold text-pink-500 flex no-wrap">
                                    Workable<CiLink />
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bun;
