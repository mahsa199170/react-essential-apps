import React, { useEffect, useState, useRef } from 'react';
import './LoadMoreProducts.css';

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const effectRan = useRef(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data && data.products && data.products.length) {
        // setProducts((prevData) => [...prevData, ...data.products]);
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      } else {
        setDisableButton(true); // If no products, disable the button
      }
    } catch (error) {
      console.log('fetch error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (effectRan.current === false) {
      fetchProducts();
      effectRan.current = true;
    }
  }, []);

  useEffect(() => {
    if (count > 0) {
      fetchProducts();
    }
  }, [count]);

  useEffect(() => {
    if (products && products.length === 194) {
      setDisableButton(true);
    }
  }, [products]);

  const loadMoreProducts = () => {
    setCount(count + 1);
  };

  return (
    <>
      {loading ? (
        <div> Loading data.... Please wait.</div>
      ) : (
        <div className="load-more-container">
          <div className="product-container">
            {products && products.length
              ? products.map((product, index) => {
                  const { id, title, images, thumbnail } = product;
                  const uniquekey = `${product.id}-${count}-${index}`;

                  return (
                    <div className="product" key={uniquekey}>
                      <img src={thumbnail} alt={title} />
                      <p>{title}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div>
            <button
              className="button-container"
              onClick={loadMoreProducts}
              disabled={disableButton}
            >
              Load More products
            </button>
            {disableButton ? (
              <p className="reached-message">
                {' '}
                you have reached to 194 products
              </p>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default LoadMoreProducts;
