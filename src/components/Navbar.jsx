import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content text-lg mt-3 z-[1] p-2 rounded-box w-52">
        <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/">Home</NavLink></li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/listedBooks">Listed Books</NavLink>
        </li>
        <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/PagesToRead">Pages to Read</NavLink></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-3xl font-bold">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
    <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/">Home</NavLink></li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/listedBooks">Listed Books</NavLink>
        </li>
        <li><NavLink className={({ isActive }) =>
              isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : 'font-semibold'
            } to="/PagesToRead">Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn text-white font-semibold text-lg bg-[#23BE0A]">Sign In</a>
    <a className="btn text-white font-semibold text-lg bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;