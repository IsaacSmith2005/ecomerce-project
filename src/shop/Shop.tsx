import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = "Showing 01 - 12 of 139 Results"
import Data from '../products.json'
import ProductCards from './ProductCards'
import Pagination from "./Pagination";
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags'

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [Products, setProducts] = useState(Data)
  // console.log(Products)

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);

  //function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //filter products based on catergory
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setProducts(newItem);
  }

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* product cards */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>

                <Pagination 
                  productsPerPage = { productsPerPage } 
                  totalProducts = { Products.length }
                  paginate = {paginate}
                  activePage = {currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={Products} GridList={GridList}/>
                <ShopCategory 
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop