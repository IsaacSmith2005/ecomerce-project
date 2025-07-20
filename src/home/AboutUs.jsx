import React from 'react'
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

const subTitle = "Tại sao chọn chúng tôi";
const title = "Hãy trở thành một thương gia";
const desc =
  "Tham gia các khóa học trên bất kỳ thiết bị nào với ứng dụng của chúng tôi và tìm hiểu mọi thứ về kinh doanh mà bạn muốn. Chỉ cần tải xuống, cài đặt và bắt đầu học.";
const btnText = "Nộp đơn ngay";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  { iconName: "icofont-graduate-alt", count: "30", text: "Certified Courses" },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const AboutUs = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3'>
                    <div className='col'>
                        {
                            countList.map((val, i) => (
                                <div key={i} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span><CountUp end={val.count} /></span>
                                                <span>+</span>
                                            </h2>
                                            <p>{val.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='col'>
                        <div className='instructor-content'>
                            <span className='subtitle'>{subTitle}</span>
                            <h2 className='title'>{title}</h2>
                            <p>{desc}</p>
                            <Link to='/sign-up' className='lab-btn'>{btnText}</Link>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='instructor-thumb'>
                            <img src='/src/assets/images/instructor/01.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs