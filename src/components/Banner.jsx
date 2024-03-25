import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-14">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
                <img src="https://i.ibb.co/hKLsYMy/pngwing-1.png" className="max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up<br /> your bookshelf</h1>
                    <Link to="/listedBooks" className="btn text-white mt-12 font-bold text-xl bg-[#23BE0A]">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;