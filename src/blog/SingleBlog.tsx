import React, { use, useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList)
  const {id} = useParams()
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0])
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Thông tin Blog"}></PageHeader>

      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article>
                <div className='section-wrapper'>
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className='col'>
                      <div className='post-item style-2'>
                        <div className="post-inner">
                          {
                            result.map((item) => (
                              <div key={item.id}>
                                <div className='post-thumb'>
                                  <img src={item.imgUrl} alt="" className='w-100'/>
                                </div>

                                <div className='post-content'>
                                  <h2>{item.title}</h2>
                                  <div className='meta-post'>
                                    <ul className='lab-ul'>
                                      {
                                        item.metaList && item.metaList.map((val, i) => (
                                          <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                  <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vero dolore cupiditate corrupti, 
                                    odit itaque fugit necessitatibus magni ullam, asperiores officia ex, excepturi qui consequuntur 
                                    repudiandae quas ipsam labore corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Et accusantium tenetur optio eligendi ipsa unde fuga, aut, 
                                    quo maxime autem facilis provident minus obcaecati, minima cumque ipsam. Beatae, recusandae voluptas.
                                  </p>

                                  <blockquote>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quasi. Incidunt delectus,
                                       eveniet nemo deserunt id repellendus eligendi? Autem hic earum maiores molestias eum dolores 
                                       sapiente repudiandae. Reprehenderit, odio non?</p>
                                       <cite>
                                          <a href="$">...Nguyễn Thanh Phước</a>
                                       </cite>
                                  </blockquote>

                                  <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum adipisci vitae culpa debitis minima et explicabo. 
                                    Sunt sit facilis reiciendis maiores rerum quod ad quas praesentium, est, quaerat aspernatur. Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Unde distinctio voluptate architecto repellendus! Provident atque culpa, assumenda, amet, 
                                    vel inventore a quae cupiditate nulla dolore doloribus! Aut nemo neque nam!
                                  </p>
                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                  <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum adipisci vitae culpa debitis minima et explicabo. 
                                    Sunt sit facilis reiciendis maiores rerum quod ad quas praesentium, est, quaerat aspernatur. Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Unde distinctio voluptate architecto repellendus! Provident atque culpa, assumenda, amet, 
                                    vel inventore a quae cupiditate nulla dolore doloribus! Aut nemo neque nam!
                                  </p>

                                  <div className='video-thumb'>
                                      <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                      <a href="https://youtu.be/gT8qmDhRmpE?si=RqtvSql9Z5dSqGAq" className='video-button popup' target='_blank'>
                                        <i className='icofont-ui-play'></i>
                                      </a>
                                  </div>

                                  <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum adipisci vitae culpa debitis minima et explicabo. 
                                    Sunt sit facilis reiciendis maiores rerum quod ad quas praesentium, est, quaerat aspernatur. Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Unde distinctio voluptate architecto repellendus! Provident atque culpa, assumenda, amet, 
                                    vel inventore a quae cupiditate nulla dolore doloribus! Aut nemo neque nam!
                                  </p>

                                  <div className='tags-section'>
                                    <ul className='tags lab-ul'>
                                      <li>
                                        <a href="#">Cuộc sống</a>
                                      </li>
                                      <li>
                                        <a href="#">Tri thức</a>
                                      </li>
                                      <li>
                                        <a href="#">Con người</a>
                                      </li>
                                    </ul>
                                    <ul className='lab-ul social-icons'>
                                      {
                                        socialList.map((val, i) => (
                                          <li key={i}>
                                            <a href="#" className={val.className}>
                                              <i className={val.iconName}></i>
                                            </a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>

                    <div className='navigations-part'>
                      <div className='left'>
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i> Blog trước
                        </a>
                        <a href="#" className='title'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </a>
                      </div>
                      <div className='right'>
                        <a href="#" className='next'>
                          <i className='icofont-double-right'></i> Blog sau
                        </a>
                        <a href="#" className='title'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog