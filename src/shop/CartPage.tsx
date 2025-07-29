import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgURL from '../assets/images/shop/del.png'
import CheckouOutPage from './CheckouOutPage';

const CartPage = () => {

    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        // fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        setcartItems(storedCartItems);
    }, [])

    // calculate prices
    const calculateTotalPrice = (item) => item.price * item.quantity;

    // handle quantity decrease
    const handleDecrease = (item) => {
        if(item.quantity > 1) {
            item.quantity -= 1; 
            setcartItems([...cartItems]);

            localStorage.setItem("cart", JSON.stringify(cartItems))            
        }
    }

    const handleIncrease = (item) => {
        item.quantity += 1; 
        setcartItems([...cartItems]);

        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    // handle item remove
    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItems) => cartItems.id !== item.id)

        //update new cart
        setcartItems(updateCart);

        updateLocalStorage(updateCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    // order total
    const orderTotal = cartSubtotal;

  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

        <div className='shop-cart padding-tb'>
            <div className="container">
                <div className="section-wrapper">
                    {/* cart top */}
                    <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cart-product'>Sản phẩm</th>
                                    <th className='cart-price'>Giá</th>
                                    <th className='cart-quantity'>Số lượng</th>
                                    <th className='cart-toprice'>Tổng</th>
                                    <th className='cart-edit'>Edit</th>
                                </tr>
                            </thead>

                            {/* table body */}
                            <tbody>
                                {
                                    cartItems.map((item, indx) => (
                                        <tr key={indx}> 
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>

                                            <td className='cat-price'>$ {item.price}</td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                    <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity}/>
                                                    <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                            <td className="cart-edit">
                                                <a href="#" onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgURL} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* ----- cart top end...... ----- */}
                    {/* cart bottom */}
                    <div className='cart-bottom'>
                        {/* checkout box */}
                        <div className='cart-checkout-box'>
                            <form className='coupon'>
                                <input className="cart-page-input-text" type="text" name='coupon' id='coupon' placeholder='Mã bưu điện ....'/>
                                <input type="submit" value={"Apply Coupon"}/>
                            </form>

                            <form className='cart-checkout'>
                                <input type="submit" value="Update Cart"/>
                                <div>
                                    <CheckouOutPage />
                                </div>
                            </form>
                        </div>

                        {/* -------- check box end........ --------- */}

                        {/* shopping box */}
                        <div className='shiping-box'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div className='calculate-shiping'>
                                        <h3>Calculate Shiping</h3>
                                        <div className="outline-select">
                                            <select>
                                                <option value="vn">Việt Nam</option>
                                                <option value="uk">United Kingdom (UK)</option>
                                                <option value="us">United States (US)</option>
                                                <option value="jp">Japan</option>
                                                <option value="cn">China</option>
                                            </select>
                                            <span className='select-icon'>
                                                <i className='icofont-rounded-down'></i>
                                            </span>
                                        </div>

                                        <div className='outline-select shipping-select'>
                                            <select>
                                                <option value="vn">Hà Nội</option>
                                                <option value="uk">London</option>
                                                <option value="us">New York</option>
                                                <option value="jp">Tokyo</option>
                                                <option value="cn">Bắc Kinh</option>
                                            </select>
                                            <span className='select-icon'>
                                                <i className='icofont-rounded-down'></i>
                                            </span>
                                        </div>
                                        <input type="text" name='postalCode' id='postalCode' placeholder='Postocode/ZIP *' className='cart-page-input-text'/>
                                        <button type='submit'>Cập nhật địa chỉ</button>
                                    </div>
                                </div>

                                <div className='col-md-6 col-12'>
                                    <div className='cart-overview'>
                                        <h3>Cart Totals</h3>
                                        <ul className='lab-ul'>
                                            <li>
                                                <span className='pull-left'>Tổng tiền giỏ hàng</span>
                                                <p className='pull-right'>$ {cartSubtotal}</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Vận chuyển và xử lý</span>
                                                <p className='pull-right'>Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Tổng tiền đơn hàng  </span>
                                                <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage