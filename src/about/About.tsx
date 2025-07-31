import React from 'react'
import PageHeader from '../components/PageHeader';

const subTitle = "Thông tin về tôi"; 
const title = "Nguyễn Thanh Phước - Sinh viên năm 2 tại Đại học Đông Á"; 
const desc = "Xin chào, tôi là Nguyễn Thanh Phước, một sinh viên năm 2 tại Đại học Đông Á. Tôi đam mê công nghệ và thiết kế web, và đang theo đuổi sự nghiệp trong lĩnh vực này. Tôi hy vọng có thể đóng góp vào các dự án thú vị và học hỏi từ những người có kinh nghiệm trong ngành.";

const year = "18+"; 
const expareance = " Second year student at Dong A University";

const About = () => {
  return (
    <div>
        <PageHeader title={"Thông tin về chúng tôi"} curPage={"About"}></PageHeader>
        <div className='about-section style-3 padding-tb section-bg'>
            <div className='container'>
                <div className='row justify-content-center row-cols-xl-2 row-cols-1 align-items-center'>
                    <div className='col'>
                        <div className='about-left'>
                            <div className='about-thumb'>
                                <img src="/src/assets/images/about/01.jpg" alt="" />
                            </div>
                            <div className='about-left-content'>
                                <h3>{year}</h3>
                                <p>{expareance}</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd col */}
                    <div className='col'>
                        <div className='about-right'>
                            <div className='section-header'>
                                <span className='subtitle'>{subTitle}</span>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About