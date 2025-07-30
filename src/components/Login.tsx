import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const title = "Đăng nhập"
const socialTittle = "Đăng nhập bằng"
const btnText = "Đăng Nhập ngay"


const socialList = [ 
  { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, 
  { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, 
  { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, 
  { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, 
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const Login = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const auth = useContext(AuthContext) as {
    signUpWithGmail: () => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
  };
  const { signUpWithGmail, login } = auth;
  const location = useLocation();
  const navigate = useNavigate();

  const from = (location.state as any)?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    login(email, password)
    .then((result) => {
      const user = result.user;
      alert("Đăng nhập thành công!");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error("Lỗi đăng nhập:", error); // Log chi tiết lỗi
      seterrorMessage(error.message || "Vui lòng cung cấp email và mật khẩu hợp lệ");
    });
  }

  const handleRegister = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMsg = error.message;
      seterrorMessage("Vui lòng cung cấp email và mật khẩu hợp lệ")
    })
  }

  return (
    <div>
      <div className='login-section padding-tb section-bg'>
        <div className='container'>
          <div className='account-wrapper'>
            <h3 className='title'>{title}</h3>
            <form className='account-form' onSubmit={handleLogin}>
              <div className='form-group'>
                <input type="email" name='email' id='email' placeholder='Email *' required/>
              </div>
              <div className='form-group'>
                <input type="password" name='password' id='password' placeholder='Password *' required/>
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
                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                  <div className='checkgroup'>
                    <input type="checkbox" name='remember' id='remember' />
                    <label htmlFor="remember">Nhớ mật khẩu</label>
                  </div>
                  <Link to='/forgetpass'>Quên mật khẩu?</Link>
                </div>
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
                Bạn chưa có tài khoản? <Link to="/sign-up">Đăng ký</Link>
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

export default Login