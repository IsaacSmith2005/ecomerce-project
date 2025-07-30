import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Đã thêm import Link
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [socialToggle, setSocialToggle] = React.useState(false);
  const [headerFixed, setHeaderFixed] = React.useState(false);

  // authinfo
  const {user} = useContext(AuthContext)
  console.log(user)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="header-top-area">
          <Link to="/singup" className="lab-btn me-3">
            <span>Tạo tài khoản</span>
          </Link>
          <Link to="/login">
            <span>Đăng nhập</span>
          </Link>
        </div>
      </div>

      {/* header bottom start */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo start */}
            <div className="logo-search-late">
              <h3 className="text-primary">HayaShop</h3>
            </div>
            {/* menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>

              {/* signin & login */}
              <Link to="sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="login" className="d-none d-md-block">
                Log In
              </Link>

              {/* menu toggle */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggle */}
              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                <i class="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
