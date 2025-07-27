import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const Search = ({products, GridList}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
            <input type='text' name='search' id='search' placeholder='Tìm kiếm...' defaultValue={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>
                <i className='icofont-search-2'></i>
            </button>
        </form>

        {/* showing search result */}
        <div>
            {
                searchTerm && filteredProducts.map((product) => (
                    <Link key={product.i} to={`/shop/${product.id}`}>
                        <div>
                            <div className='pro-thumb h-25'>
                                <img src={product.img} alt='' width={70} className='flex-{grow|shrink}-0'/>
                            </div>
                        </div>
                        <div className='product-content'>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </div>
                        <h6>${product.price}</h6>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Search