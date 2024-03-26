import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
    const { image, bookName, tags, author, category, rating,yearOfPublishing,publisher,totalPages } = book
    return (
        <div className="hero bg-base-200 border border-slate-300 mt-10">
            <div className="hero-content flex-col lg:flex-row gap-7">
                <img src={image} className="h-80 w-56 p-6 bg-slate-300 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="font-bold text-3xl mt-4">{bookName}</h1>
                    <p className="font-medium text-base mb-3 mt-3">By : {author}</p>
                    <div className="flex items-center gap-8 font-medium text-[#23BE0A]">
                        <p className="text-black">Tag</p>
                        <p className="bg-[#23BE0A0D] p-1 rounded-xl border border-[#23BE0A0D] text-center ">#{tags[0]}</p>
                        <p className="bg-[#23BE0A0D] p-1 rounded-xl border text-center border-[#23BE0A0D]">#{tags[1]}</p>
                        <p className="text-black font-normal">Year of Publishing : {yearOfPublishing}</p>
                    </div>
                    <div className="flex items-center gap-6 font-normal text-base mb-3 border-b-2 py-4">
                        <p>Publisher : {publisher}</p>
                        <p>Page : {totalPages}</p>
                    </div>
                    <div className="">
                        <button className="btn rounded-3xl bg-[#328EFF26] mr-4 text-[#328EFF]">Category : {category}</button>
                        <button className="btn rounded-3xl mr-4 bg-[#FFAC3326] text-[#FFAC33]">Rating : {rating}</button>
                     <Link to="">
                     <button className="btn rounded-3xl px-5 bg-[#23BE0A] text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;