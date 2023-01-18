import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/Image/google.svg';
import FacebookLogo from '../../Assets/Image/facebook.svg';
import GithubLogo from '../../Assets/Image/github.svg';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='email' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper my-2'>
                    <button className='google-auth' onClick={handleGoogleAuth}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
                <div className='input-wrapper mb-2'>
                    <button className='google-auth'>
                        <img src={GithubLogo} alt='' />
                        <p> Continue with Github </p>
                    </button>
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth'>
                        <img src={FacebookLogo} alt='' />
                        <p> Continue with Facebook </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;