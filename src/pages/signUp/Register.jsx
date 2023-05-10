import login_img from '../../assets/images/login/login.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const {createUserWithEmail} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // create user 
        createUserWithEmail(email, password)
        .then(result => {console.log(result.user)})
        .catch(err => console.log(err.message))
    
    }

    return (
        <div >
            <div className='hidden  md:block text-center'>
                <h1 className='relative top-20 text-3xl font-black  '>Please Register</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={login_img} />
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name'  className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className='btn btn-primary' />
                                </div>
                            </form>
                            <div className='text-center text-sm mt-5'>
                                <p>or</p>
                                <h2>Sign Up With</h2>
                            </div>
                            <div className=' mt-5 flex gap-5  justify-center'>
                                <div className="btn btn-circle btn-info "><FaFacebook className='w-[20px] h-[20px]' /></div>
                                <div className="btn btn-circle btn-error"><FaInstagram className='w-[20px] h-[20px]' /></div>
                                <div className="btn btn-circle btn-secondary"><FaTwitter className='w-[20px] h-[20px]' /></div>
                            </div>
                            <h2 className='text-xs text-center mt-6'>Already have an account ? <Link to="/register" className='text-warning'>Login</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;