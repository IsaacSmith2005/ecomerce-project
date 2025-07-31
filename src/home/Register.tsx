import React from 'react'

const title = (
    <h2 className='title'> Chào mừng bạn đến với <b><span>HayaShop</span></b> Nơi mọi thứ bạn cần </h2>
)

const desc = "Thời gian có hạn! Hãy đăng ký ngay để nhận được những ưu đãi hấp dẫn nhất!"

const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register