import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom';

const CheckouOutPage = () => {

    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    //handle Tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    // direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Bạn đã thanh toán thành công!")
        localStorage.removeItem("cart");
        navigate(from, {replace: true})
    }

  return (
    <div className='modalCard'>
        <Button variant='primary' className='py-2' onClick={handleShow}> Proceed to Checkout </Button>
        <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            className='modal fade'
            centered
        >
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'>Chọn phương thức thanh toán</h5>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='tabs mt-3'>
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <a className={`nav-link ${activeTab === 'visa' ? 'active' : ""}`}
                                    id='visa-tab'
                                    data-toggle='tab'
                                    role='tab'
                                    aria-controls='visa'
                                    aria-selected={activeTab === "visa"}
                                    onClick={() => handleTabChange("visa")}
                                    >
                                        <img src="https://wallpapers.com/images/high/visa-mastercard-logos-wh429a8o742pgm38.png" alt="" width='80' />
                                    </a>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <a className={`nav-link ${activeTab === 'paypal' ? 'active' : ""}`}
                                    id='paypal-tab'
                                    data-toggle='tab'
                                    role='tab'
                                    aria-controls='paypal'
                                    aria-selected={activeTab === "paypal"}
                                    onClick={() => handleTabChange("paypal")}
                                    >
                                        <img src="https://i.imgur.com/yK7EDD1.png" alt="" width='80' />
                                    </a>
                                </li>
                            </ul>

                            {/* content */}

                            <div className='tab-content' id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                id='visa'
                                role='tabpanel'
                                aria-labelledby='visa-tab'
                                >
                                    {/* visa tab content */}
                                    <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Thẻ tín dụng</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required/>
                                                <span>Tên chủ thẻ</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                <span>Số thẻ</span>
                                                <i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                    <span>Ngày hết hạn</span>
                                                    <i className='fa fa-eye'></i>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                    <span>CVV</span>
                                                    <i className='fa fa-eye'></i>
                                                </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Thanh toán ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* paypal content */}
                                <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                id='paypal'
                                role='tabpanel'
                                aria-labelledby='paypal-tab'
                                >
                                    {/* paypal tab content */}
                                    <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Thẻ tín dụng</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required/>
                                                <span>Email</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                <span>Tên Của bạn</span>
                                                <i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                    <span>Ngày hết hạn</span>
                                                    <i className='fa fa-eye'></i>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min='1' max='999' className='form-control' required/>
                                                    <i className='fa fa-eye'></i>
                                                </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Thanh toán</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* payment desclaimer */}
                            <p className='mt-3 px-4 p-Disclaimer'>
                                <em>Tuyên bố miễn trừ thanh toán: </em> 
                                Trong mọi trường hợp, Chủ sở hữu sẽ không thanh toán hoặc 
                                thanh toán một phần cho bất kỳ vật liệu hoặc dịch vụ nào.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckouOutPage