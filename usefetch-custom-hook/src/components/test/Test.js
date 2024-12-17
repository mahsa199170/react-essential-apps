import React from 'react';
import UseFetch from '../use-fetch/UseFetch';

const Test = () => {
  const { data, error, loading } = UseFetch(
    'https://dummyjson.com/products',
    {}
  );
  console.log(data, error, loading);
  return (
    <div>
      <h1>UseFetch Custom Hook</h1>
      {loading ? <h3>Loading....Please wait!</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length > 0
        ? data.products.map((dataItem) => {
            const { id, title } = dataItem;
            return <p key={id}>{title}</p>;
          })
        : null}
    </div>
  );
};

export default Test;
