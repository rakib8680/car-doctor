
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'


const Navbar = () => {
    return (
        <div className="navbar bg-base-300 mb-8 py-4  rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost ">
                    <img src={logo} className="w-16 h-16" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/'>Home</Link>

                    </li>
                    <li tabIndex={0}>
                        <a href='#about' className="justify-between">
                            About
                        </a>
                        
                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn  btn-outline btn-primary duration-200 btn-sm md:btn-md">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;