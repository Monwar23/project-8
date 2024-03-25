import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleBook = ({book}) => {
    const {bookId,bookName,author,image,rating,category,tags}=book
    return (
       <Link to={`/book/${book.bookId}`}>
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl border p-5">
            <figure><img className="h-80 lg:w-11/12 p-10 rounded-lg bg-slate-100" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-8 font-medium text-[#23BE0A]">
                    <p className="bg-[#23BE0A0D] p-1 rounded-xl border border-[#23BE0A0D] text-center ">{tags[0]}</p>
                    <p className="bg-[#23BE0A0D] p-1 rounded-xl border text-center border-[#23BE0A0D]">{tags[1]}</p>
                </div>
                <h2 className="card-title font-bold text-2xl mt-4">{bookName}</h2>
                <p className="font-medium text-base mb-3">By : {author}</p>
                <div className="card-actions border-t-2 border-dashed justify-end">
                    <p className="font-medium text-base mt-3">{category}</p>
                    <div>
                        <p className="flex justify-center items-center gap-2 font-medium text-base mt-3">{rating}<MdOutlineStarRate></MdOutlineStarRate></p>
                    </div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default SingleBook;