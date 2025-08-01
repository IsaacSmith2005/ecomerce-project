import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const title = "Đăng ký"
const socialTittle = "Đăng ký bằng"
const btnText = "Đăng ký"

const Signup = () => {

    const [errorMessage, seterrorMessage] = useState("");
    const { signUpWithGmail, createUser } = useContext(AuthContext as React.Context<any>);
    const location = useLocation();
    const navigate = useNavigate();

    // Get the redirect path after signup, default to "/"
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorMsg = error.message;
            seterrorMessage("Vui lòng cung cấp email và mật khẩu hợp lệ")
        })
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        // console.log(form)
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        // console.log(email, password, confirmPassword)
        if(password !== confirmPassword) {
            seterrorMessage("Mật khẩu không trùng khớp! Vui lòng nhập đúng mật khẩu")
        } else {
            seterrorMessage("");
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                alert("Tài khoản đăng ký thành công!")
                navigate(from, {replace: true})
            }).catch((error) => {
                console.log(error.message)
                alert(`${error.message}`)
            })
        }
    }

  return (
    <div>
        <div className='login-section padding-tb section-bg'>
            <div className='container'>
                <div className='account-wrapper'>
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignup}>
                    <div className='form-group'>
                        <input type="text" name='name' id='name' placeholder='Full Name *' required/>
                    </div>
                    <div className='form-group'>
                        <input type="email" name='email' id='email' placeholder='Email *' required/>
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' id='password' placeholder='Password *' required/>
                    </div>
                    <div className='form-group'>
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required/>
                    </div>
                    {/* showing message */}
                    <div>
                        {
                        errorMessage && (
                            <div className='error-message text-danger'>
                            {errorMessage}
                            </div>
                        )
                        }
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='d-block lab-btn'>
                        <span>{btnText}</span>
                        </button>
                    </div>
                    </form>

                    {/* account bottom */}
                    <div className='account-bottom'>
                    <span className='d-block cate pt-10'>
                        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                    </span>
                    <span className='or'>
                        <span>or</span>
                    </span>

                    {/* social login */}
                    <h5 className='subtitle'>{socialTittle}</h5>
                    <ul className='lab-ul social-icons justify-content-center'>
                        <li>
                        <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                        </li>
                        <li>
                        <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
                        </li>
                        <li>
                        <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
                        </li>
                        <li>
                        <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
                        </li>
                        <li>
                        <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup