import React from "react";
import "./productdetaillayout.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks";

function ProductDetailLayout() {
  const { productID } = useParams();

  const { data, isLoading, isError } = useFetch(
    `http://localhost:4000/api/products/${productID}`
  );

  return (
    <section className="product">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>Sorry Some Error Occured...</h1>}
      {!isLoading && !isError && data && (
        <>
          <div className="product__photo">
            <div className="photo-container">
              <div className="photo-main">
                <div className="controls">
                  <i className="material-icons">share</i>
                  <i className="material-icons">favorite_border</i>
                </div>
                <img
                  src={data.image}
                  alt="green apple slice"
                />
              </div>
              <div className="photo-album">
                <ul>
                  <li>
                    <img
                      src={data.image}
                      alt="green apple"
                    />
                  </li>
                  <li>
                    <img
                      src={data.image}
                      alt="half apple"
                    />
                  </li>
                  <li>
                    <img
                      src={data.image}
                      alt="green apple"
                    />
                  </li>
                  <li>
                    <img
                      src={data.image}
                      alt="apple top"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <h1>{data.title}</h1>
              <span>COD: 45999</span>
            </div>
            <div className="price">
              R$ <span>{data.price}</span>
            </div>
            <div className="variant">
              <h3>SELECT A COLOR</h3>
              <ul>
                <li>
                  <img
                    src={data.image}
                    alt="green apple"
                  />
                </li>
                <li>
                  <img
                    src={data.image}
                    alt="yellow apple"
                  />
                </li>
                <li>
                  <img
                    src={data.image}
                    alt="orange apple"
                  />
                </li>
                <li>
                  <img
                    src={data.image}
                    alt="red apple"
                  />
                </li>
              </ul>
            </div>
            <div className="description">
              <h3>DESCRIPTION</h3>
              <ul>
                <li>{data.description}</li>
              </ul>
            </div>
            <div className="description">
              <h3>RATING</h3>
              {data.rating.rate}
            </div>
            <button className="buy--btn">ADD TO CART</button>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductDetailLayout;
