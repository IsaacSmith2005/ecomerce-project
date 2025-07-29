import React, { useState } from 'react'
import Ratting from '../components/Ratting'

const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)

  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Đánh giá</li>
            <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Mô tả</li>
        </ul>

        {/* desc & review content */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul">
                    {
                        ReviewList.map((review, i) => (
                            <li key={i}>
                                <div className="post-thumb">
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className='entry-meta'>
                                        <div className="posted-on">
                                            <a href="#">{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                {/* add review field */}
                <div className='client-review'>
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>

                        <form action="action" className='row'>
                            <div className='col-md-4 col-12'>
                                <input type="text" name='name' id='name' placeholder='Full name *'/>
                            </div>
                            <div className='col-md-4 col-12'>
                                <input type="text" name='email' id='name' placeholder='Full email *'/>
                            </div>
                            <div className='col-md-4 col-12'>
                                <div className='rating'>
                                    <span className='me-2'>Số sao</span>
                                    <Ratting />
                                </div>
                            </div>
                            <div className='col-md-12 col-12'>
                                <textarea name="message" id="message" rows="8" placeholder='Bình luận tại đây'></textarea>
                            </div>
                            
                            <div className='col-12'>
                                <button type='submit' className='default-button'>
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* description */}
            <div className='description'>
                <p>Trong thế giới thời trang không ngừng đổi mới, 
                    bộ sưu tập của chúng tôi tập trung mang đến những sản phẩm đa dạng, 
                    phong cách và đẳng cấp, được thiết kế tỉ mỉ để phù hợp với mọi cá tính và phong cách sống. 
                    Từ những bộ trang phục phù hợp với nơi công sở, quyến rũ khi đi chơi, đến những mẫu thiết kế mang tính nghệ thuật, 
                    sáng tạo, tất cả đều hướng tới việc giúp bạn thể hiện phong cách cá nhân một cách tự tin và nổi bật nhất. 
                    húng tôi cam kết sử dụng nguyên liệu cao cấp, kỹ thuật may mặc tinh xảo và xu hướng thời trang mới nhất 
                    để mang đến những sản phẩm không chỉ đẹp về mặt hình thức mà còn bền đẹp theo thời gian. Không phân biệt phong cách cổ điển, 
                    hiện đại hay phá cách, bộ sưu tập của chúng tôi luôn hướng tới việc tạo ra vẻ đẹp tự nhiên, sự thoải mái và sự tự tin cho người mặc mỗi ngày. 
                    Với phương châm lấy khách hàng làm trung tâm, chúng tôi luôn lắng nghe và cập nhật những xu hướng mới nhất, 
                    nhằm cung cấp cho bạn sự lựa chọn hoàn hảo, phù hợp với mọi hoàn cảnh và phong cách cá nhân, 
                    để mỗi ngày trở thành một sẵn sàng để tỏa sáng trong bất kỳ tình huống nào.
                </p>

                <div className='post-item'>
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                            <li>amet consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                            <li> consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                            <li>amet consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                            <li>amet consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                            <li>amet consectetur adipisicing elit. Quas itaque nesciunt rem.</li>
                        </ul>
                    </div>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quidem accusantium? Expedita architecto esse vel. 
                    Deserunt facilis dolore incidunt quaerat, magni laudantium magnam iusto consequatur asperiores, nesciunt voluptatem quisquam nam.</p>
            </div>
        </div>
    </>
  )
}

export default Review