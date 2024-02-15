import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='flex-center flex-col h-screen'>
            <h1 className='text-8xl mt-20 text-center'>
                404 - Not Found!
            </h1>
            <div className='flex-grow'></div>
            <div style={{ height: 'calc(100vh - 400px)' }}></div>
            <Link to="/" className='text-center mb-9'>
                <h1 className='text-center text-red-500 text-4xl'>
                    Go Home
                </h1>
            </Link>
        </div>
    );
}
