import React from 'react'

export default function ErrorPage() {
    return (
        <div className="w-full">
            <div className="mt-10 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-black dark:text-white pt-3 font-semibold">Error</h1>
                <p className="text-center text-gray-700 text-sm sm:text-base dark:text-white tracker-wide mt-4">
                this page is not in the mood :(
                </p>
            </div>
        </div>
    )
}