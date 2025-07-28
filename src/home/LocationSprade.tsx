import React from 'react'
import { Link } from "react-router-dom";

const title = "Có Hơn 100,000 Khách Hàng";

const desc = "Mua sản phẩm với ứng dụng của chúng tôi và tận hưởng thời gian trải nghiệm mua sắm theo ý muốn của bạn. Hãy tải xuống và bắt đầu tận hưởng mua sắm đi nào!";

const clientsList = [ 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
    { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, 
]

const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            {/* main content */}
            <div className='section-wrapper'>
                <div className='clients'>
                    {
                        clientsList.map((val, i) => (
                            <div key={i} className='client-list'>
                                <Link to="/sign-up" className='client-content'>
                                    <span>{val.text}</span>
                                </Link>
                                <div className='client-thumb'>
                                    <img src={val.imgUrl} alt='' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationSprade