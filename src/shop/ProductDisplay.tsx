import React, { useState } from 'react'
import { Link } from "react-router-dom";
const desc = "Đây là một trong những sản phẩm được ưa chuộng và bán chạy nhất của cửa hàng chúng tôi. Với ngoại hình với thiết kế bắt mắt mang đến cho bạn một trải nghiệm tuyệt vời."

const ProductDisplay = ({item}) => {

  const {name, id, price, seller, ratingsCount, quantity, img} = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select size");
  const [color, setColor] = useState("Select color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  const handleDecrease = () => {
    if(prequantity > 1) {
      setQuantity(prequantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity(prequantity + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if(existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product)
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form fields
    setQuantity(1);
    setSize("Select Size")
    setColor("Select Color")
    setCoupon("");
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* size */}
          <div className='select-product size'>
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>

          {/* color */}
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Hồng</option>
              <option>Xám</option>
              <option>Đỏ</option>
              <option>Trắng</option>
              <option>Xanh</option>
              <option>Đen</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>

          {/* cart plus minus */}
          <div className='cart-plus-minus'>
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' 
            value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>

          {/* coupon field */}
          <div className='discount-code mb-2'>
            <input type='text' placeholder='Nhập mã giảm giá' onChange={(e) => setCoupon(e.target.value)}></input>
          </div>

          {/* btn section */}
          <button type='submit' className='lab-btn'>
            <span>Thêm vào giỏ hàng</span>
          </button>
          <Link to="/cart-page" className='lab-btn bg-primary'>
            <span>Kiểm tra giỏ hàng</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay