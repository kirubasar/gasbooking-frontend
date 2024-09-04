import { Link, useLocation, useLoaderData } from "react-router-dom";
import './product.css' 

const Products = () => {
    const location = useLocation();
    const defaultProducts = useLoaderData(); // This will load the products by default via loader
    const products = location.state?.searchResults || defaultProducts.data.products;
    const imgUrl = `https://www.tatkalbanking.com/public_images/icon-gas.png`
   // console.log(products)
  return (
   <div className="container mt-5">
    <div className="row g-3">
        {
            products.length > 0 ? (
              products.map((product, index)=>{
                return (
                 
                <div className="col-md-4 col-lg-4 col-xl-4" key={index}>
                  
                <div className="card">
                <img src={imgUrl} className="card-img-top" alt={product.name}/>
                <div className="card-body">
                <h5 className="card-title">Name: {product.name}</h5>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Branch: {product.branch}</p>
                <p className="card-text">Location: {product.location}</p>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Stocks: {product.stock}</p>
                 <Link to="/dashboard/booking" className="btn btn-primary">booking</Link>
             </div>
             </div>
             </div>
             )
            })
          ) : (
            <p>No products found</p>
          )}
    </div>
    </div>
  );
}



export default Products;
