const GptSearchBar = () => {
    return (
        <div className="text-center pt-24 pb-8 bg-black">
            <form className="flex justify-center items-center ">
                <input
                    type="text"
                    placeholder="What would you like to watch today?"
                    className="bg-gray-200 rounded-md px-4 py-2 w-96"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-md px-4 py-2 mx-4">
                    Search
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
