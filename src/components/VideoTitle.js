import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute bg-black bg-opacity-40 mt-[92px] pt-48 top-0 left-0 w-full  px-8 py-20 ">
            <h1 className="text-white text-3xl font-semibold">{title}</h1>
            <p className="text-gray-300 mt-2 w-1/2 break-words">{overview}</p>
            <div className="flex mt-4 space-x-4">
                <button className="flex items-center justify-center bg-white text-black text-lg px-6 py-2 rounded-md font-bold focus:outline-none hover:bg-gray-300 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 3v18l18-9L3 3z" />
                    </svg>
                    Play
                </button>
                <button className="flex items-center justify-center bg-zinc-600 bg-opacity-90 text-white text-lg px-6 py-2 rounded-md font-bold focus:outline-none hover:bg-opacity-30 hover:bg-gray-600 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 stroke-current"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <circle
                            cx="10"
                            cy="10"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <text
                            x="50%"
                            y="50%"
                            fill="currentColor"
                            fontSize="14"
                            textAnchor="middle"
                            alignmentBaseline="central"
                        >
                            i
                        </text>
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
