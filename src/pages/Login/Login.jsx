
import login_img from '../../assets/images/login/login.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Login = () => {

const handleLogin = event => {
    event.preventDefault();
    const form = event.target

}
    return (
        <div >
            <div className='hidden  md:block text-center'>
                <h1 className='relative top-20 text-3xl font-black  '>Please Login</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={login_img} />
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className='btn btn-primary' />
                                </div>
                            </form>
                            <div className='text-center text-sm mt-5'>
                                <p>or</p>
                                <h2>Login With</h2>
                            </div>
                            <div className=' mt-5 flex gap-5  justify-center'>
                                <div className="btn btn-circle btn-info "><FaFacebook className='w-[20px] h-[20px]' /></div>
                                <div className="btn btn-circle btn-error"><FaInstagram className='w-[20px] h-[20px]' /></div>
                                <div className="btn btn-circle btn-secondary"><FaTwitter className='w-[20px] h-[20px]' /></div>
                            </div>
                            <h2 className='text-xs text-center mt-6'>Dont have an account ? <Link to="/register" className='text-warning'>Register</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;