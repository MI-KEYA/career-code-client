import React, { use } from 'react';
import registerLottie from '../../assets/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Register = () => {
    const {  createUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

         createUser(email, password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '200px' }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='mt-10 text-center text-3xl font-bold'>Register Your Account</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input mb-5" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;