import loaderGif from "../assets/gif/loader.gif";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <img src={loaderGif} alt="loader" className="w-20 h-20" />
        </div>
    );
};

export default Loader;

