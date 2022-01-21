import { useState } from 'react';
import './Login.scss';
import * as TiIcons from 'react-icons/ti'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa';


function Login() {
    const [logintoggle, setlogintoggle] = useState(true);
    const changeLoginToggle = () => {
        setlogintoggle(!logintoggle);
    }

    if (logintoggle) {
        return (
            <>
                <div className='signup-block'>
                    <div className='left-block'>
                        <h1 className='left-block--heading-text'>Create Account</h1>
                        <div className='media-logos'>
                            <button className='media-logos--round-button'>
                                <TiIcons.TiSocialGooglePlus />
                            </button>
                            <button className='media-logos--round-button'>
                                <TiIcons.TiSocialFacebook />
                            </button>
                            <button className='media-logos--round-button'>
                                <MdIcons.MdEmail />
                            </button>
                            <button className='media-logos--round-button'>
                                <FaIcons.FaTwitter />
                            </button>
                        </div>
                        <h4>Or use your email for registration:</h4>
                        <div className='signup-form'>
                            <input type="text" placeholder='Name' className='signup-form__input-name' />
                            <input type="email" placeholder='Email' className='signup-form__input-name' />
                            <input type="password" placeholder='Password' className='signup-form__input-name' />
                            <div className='signup-form__confirm-option'>
                                <input type="checkbox" name="" id="" className='signup-form__confirm-option--green-box' />
                                <span className='signup-form__confirm-option--small-text'>I Agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</span>
                            </div>
                            <div className='signup-form__sign-option'>
                                <button type="submit" className='signup-form__sign-option--round-button signup-form__sign-option--dark-button'>Sign Up</button>
                                <button type="submit" className='signup-form__sign-option--round-button signup-form__sign-option--light-button' onClick={changeLoginToggle}>Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className='right-block'>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='signup-block'>
                    <div className='left-block'>
                        <h1 className='left-block--heading-text'>Login</h1>
                        <div className='media-logos'>
                            <button className='media-logos--round-button'>
                                <TiIcons.TiSocialGooglePlus />
                            </button>
                            <button className='media-logos--round-button'>
                                <TiIcons.TiSocialFacebook />
                            </button>
                            <button className='media-logos--round-button'>
                                <MdIcons.MdEmail />
                            </button>
                            <button className='media-logos--round-button'>
                                <FaIcons.FaTwitter />
                            </button>
                        </div>
                        <h4>Or use your email for login:</h4>
                        <div className='signup-form'>
                            <input type="email" placeholder='Email' className='signup-form__input-name' />
                            <input type="password" placeholder='Password' className='signup-form__input-name' />
                            <div className='signup-form__forgot-password'>
                                <a href="#" className='signup-form__forgot-password--small-text'>forgot password?</a>
                            </div>
                            <div className='signup-form__sign-option'>
                                <button type="submit" className='signup-form__sign-option--round-button signup-form__sign-option--light-button' onClick={changeLoginToggle}>Sign Up</button>
                                <button type="submit" className='signup-form__sign-option--round-button signup-form__sign-option--dark-button'>Sign In</button>
                            </div>

                        </div>
                    </div>
                    <div className='right-block'>

                    </div>
                </div>
            </>
        )
    }
}

export default Login;
