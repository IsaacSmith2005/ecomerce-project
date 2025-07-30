import React from 'react'
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand"; 
const title = "Good Qualification Services And Better Expriences"; 
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+"; 
const expareance = "Years Of Experiences";

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
                            <div className='abs-thumb'>
                                <img src="/src/assets/images/about/02.jpg" alt="" />
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