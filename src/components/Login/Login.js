import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogo from '../../Assets/Image/google.svg';
import GithubLogo from '../../Assets/Image/github.svg';
import FacebookLogo from '../../Assets/Image/facebook.svg';
import { useNavigate } from "react-router-dom";
import './AuthForm.css';
import app from '../../Firebase/Firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.erro(error);
            })
    }

    const handleGithubAuth = () => {
      signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error.message);
      })
    }

    const handleFacebookAuth = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    const handleLogIn = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
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
                <h1>Login</h1>
                <form onSubmit={handleLogIn}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Tech Geeks?{" "}
                    <span onClick={() => navigate("/signup")}>Create New Account</span>
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
                    <button className='google-auth' onClick={handleGithubAuth}>
                        <img src={GithubLogo} alt='' />
                        <p> Continue with Github </p>
                    </button>
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleFacebookAuth}>
                        <img src={FacebookLogo} alt='' />
                        <p> Continue with Facebook </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;