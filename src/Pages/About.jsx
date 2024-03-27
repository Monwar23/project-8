

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen my-16" style={{ backgroundImage: 'url(https://i.ibb.co/GCDDY7q/stack-of-books-in-home-interior-picture-id532852345.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">The right book in the right hands at the right time
                            can change the world.</h1>
                        <button className="btn text-white text-xl bg-[#23BE0A] border-none">Get Books</button>
                    </div>
                </div>
            </div>
            <div className="px-10">
                <h2 className="font-bold text-2xl mb-3">Who We Are</h2>
                <p className="mb-5">BookVibes is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. BookVibes launched in January 2007.</p>
                <h2 className="font-bold text-2xl mb-3">A Few Things You Can Do On BookVibes</h2>
                <li>Users can view a list of books categorized into Read Books and Wishlist Books.</li>
                <li>The ability to sort books based on different criteria such as rating, number of pages, or year of publishing enhances user experience and makes it easier to find specific books.</li>
                <li>Each book page provides comprehensive details about the selected book, including its title, author, category, review, total pages, rating, publisher, year of publishing, and tags.</li>
                <li>Users have the functionality to mark books as read or add them to their wishlist directly from the book details page.</li>
                <li className="mb-5">The PageToRead component utilizes a bar graph to present statistics related to books marked as read.</li>

                <h2 className="font-bold text-2xl mb-3">A Message From Our Co-Founder
                </h2>
                <p>When I was in second grade, I discovered the Hardy Boys series. Ever since, I have loved to read — both for fun and to improve my mind. And I am always looking for the next great book.</p>
                <p>One afternoon while I was scanning a friends bookshelf for ideas, it struck me: when I want to know what books to read, Id rather turn to a friend than any random person or bestseller list.

</p>
<p>So I decided to build a website  a place where I could see my friends bookshelves and learn about what they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote the code. We started in my living room, motivated by the belief that there was a better way to discover and discuss good books, and that we could build it.</p>
<p>BookVibes is that site. It is a place where you can see what your friends are reading and vice versa. You can create bookshelves to organize what you have read (or want to read). You can comment on each others reviews. You can find your next favorite book. And on this journey with your friends you can explore new territory, gather information, and expand your mind. </p>
<p>Knowledge is power, and power is best shared among readers. 

</p>
<h3 className="font-medium mt-10">Otis Chandler <br />
Co-Founder</h3>

            </div>
        </div>
    );
};

export default About;