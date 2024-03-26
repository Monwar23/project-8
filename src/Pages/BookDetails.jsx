import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks,getBooks } from "../utiles";
import toast from "react-hot-toast";

const BookDetails = () => {
    const books=useLoaderData()
    const {bookId}=useParams()
    const idInt=parseInt(bookId)
    const book=books.find(book=>book.bookId===idInt)
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book

    const handleRead=()=>{
        const isRead = saveBooks(idInt, 'read'); // Save book as read
        if (isRead) {
            toast.success('Book read Successfully!');
        } else {
            toast.error('Already Read');
        }
    }
    const handleWishlist = () => {
        const isWishlist = saveBooks(idInt, 'wishlist'); // Save book to wishlist
        if (isWishlist) {
            toast.success('Book added to Wishlist!');
        } else {
            toast.error('Already added to Wishlist or Read');
        }
    }

    return (
    <div>
            <div className="hero min-h-screen bg-base-200 gap-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="text-base font-medium mt-4 border-b-2 border-dashed py-4">By : {author}</p>
      <p className="text-base font-medium mb-4 border-b-2 border-dashed py-4">{category}</p>
      <p className="text-sm mb-4"><span className="font-bold text-sm">Review :</span> {review}</p>
      <div className="flex gap-8 font-medium text-[#23BE0A] items-center text-sm border-b-2 border-dashed py-4">
                    <p className=" font-bold text-black">Tag</p>
                    <p className="bg-[#23BE0A0D] p-1 rounded-xl border border-[#23BE0A0D] text-center ">#{tags[0]}</p>
                    <p className="bg-[#23BE0A0D] p-1 rounded-xl border text-center border-[#23BE0A0D]">#{tags[1]}</p>
                </div>
        <div className="flex items center gap-20">
            <div className="text-sm">
            <p className="mt-4 mb-2">Number of Pages:</p>
            <p className="mb-2">Publisher:</p>
            <p className="mb-2">Year of Publishing:</p>
            <p className="mb-2">Rating:</p>
            </div>
            <div className="text-sm font-bold">
                <p className="mt-4 mb-2">{totalPages}</p>
                <p className="mb-2">{publisher}</p>
                <p className="mb-2">{yearOfPublishing}</p>
                <p className="mb-2">{rating}</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
        <button onClick={handleRead} className="btn border-slate-600 font-semibold text-lg px-6">Read</button>
        <button onClick={handleWishlist} className="btn text-white font-semibold text-lg bg-[#23BE0A]">Wishlist</button>
        </div>
      
    </div>
  </div>
</div>

    </div>
    );
};

export default BookDetails;