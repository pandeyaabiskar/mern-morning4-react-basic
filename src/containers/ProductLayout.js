
import './productlayout.css';
import { Link } from 'react-router-dom';
import{useFetch} from '../utils/hooks'

function ProductLayout() {
  const {data, isLoading, isError} = useFetch('http://localhost:4000/api/products')
  

  return (
    <section className="products">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>Sorry Some Error Occured...</h1>}
      {!isLoading &&
        !isError &&
        data &&
        data.map((productData, index) => {
          return (
            <div className="product-card" key={index}>
              <Link to={"/products/" + productData._id}>
                <div className="product-image">
                  <img src={productData.image} />
                </div>
                <div className="product-info">
                  <h5>{productData.title}</h5>
                  <h6>${productData.price}</h6>
                </div>
              </Link>
            </div>
          );
        })}
    </section>
  );
}

export default ProductLayout;
