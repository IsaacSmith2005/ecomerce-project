import React from 'react'
import { Link } from "react-router-dom";

const title = "About ShopHaya";
const desc =
  "Website ShopHaya mang đến cho bạn mọi sản phẩm mới nhất và tốt nhất. Đáp ứng mọi nhu cầu của bạn. Luôn phát triển và cập nhật trong lĩnh vực bán hàng thương mại. ";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: "icofont-google-map", text: "Da Nang, Viet Nam.", },
  { iconName: "icofont-phone", text: "+8432 835 4320", },
  { iconName: "icofont-envelope", text: "phuoc106020@donga.edu.vn", },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook", },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter", },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin", },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram", },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest", },
];

const ItemList = [
  { text: "Tất cả sản phẩm", link: "/shop", },
  { text: "Shop", link: "/shop", },
  { text: "Blog", link: "/blog", },
  { text: "About", link: "/about", },
  { text: "Policy", link: "#", },
  { text: "FAQs", link: "/about", },
];

const quickList = [
  { text: "Sự kiện", link: "#", },
  { text: "Hình ảnh", link: "#", },
  { text: "Diễn đàn", link: "#", },
  { text: "Chính sách bảo mật", link: "#", },
  { text: "Điểu khoản sử dụng", link: "#", },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Aminur islam <a href="#">@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer !!
      </p>
    ),
  },
];

const footerbottomList = [
  { text: "Faculty", link: "#", },
  { text: "Staff", link: "#", },
  { text: "Students", link: "#", },
  { text: "Alumni", link: "#", },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 jusctify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}>{val.text}</i>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a href="#" className={val.className}>
                              <i className={val.iconName}>{val.text}</i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">

                      <ul className="lab-ul office-address">
                        {quickList.map((val, i) => (
                          <li key={i}>
                            <a href='#'>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">

                      <ul className="lab-ul office-address">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <a href='#'>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">

                      <ul className="lab-ul office-address">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className='footer-bottom'>
        <div className='container'>
            <div className='section-wrapper'>
                <p>&copy; 2025 <Link to='/'> ShopHaya </Link> Được thiết kế bởi <a href='/' target='_blank'>XYZ</a></p>
                <div className='footer-bottom-list'>
                    {
                        footerbottomList.map((val, i) => (
                            <a href='#' key={i}>{val.text}</a>
                        ))
                    }
                </div>
            </div>
        </div>        
      </div>
    </footer>
  );
}

export default Footer