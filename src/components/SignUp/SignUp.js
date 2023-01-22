import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/Image/google.svg';
import FacebookLogo from '../../Assets/Image/facebook.svg';
import GithubLogo from '../../Assets/Image/github.svg';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] =useState({value: "", error: ""});
    const [password, setPassword] = useState({value: "", error: ""});
    const [confirmPassword, setConfirmPassword] = useState({value: "", error: ""});
    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEmail = (emailInput) => {
        if(/\S+@\S+\.\S+/.test(emailInput)){
            setEmail({value: emailInput, error: ""});
        }
     else{
        setEmail({value:"", error: "Invalid email"});
     }
    }

    const handlePassword = (passwordInput) => {
        if(passwordInput.length < 7){
            setPassword({value: "", error:"Password too short"});
        }
        else{
            setPassword({value: passwordInput, error:""});
        }
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword({value: event.target.value, error: ""});
    }

    // const handle

    const handleSignUp = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user); 
        })
        .catch((error) => {
            const errorMessage = error.message;
           console.log(errorMessage);
          });
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' id='email' onBlur={(event) => handleEmail(event.target.value)} />
                        </div>
                        {
                            email?.error && <p className='error'>{email.error}</p>
                        }
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' onBlur={(event) => handlePassword(event.target.value)} />
                        </div>
                        {
                            password?.error && <p className='error'>{password.error}</p>
                        }
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                                onBlur={handleConfirmPassword}
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