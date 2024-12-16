import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoding(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('No products found!');
      }
      const data = await response.json();
      console.log(data.products);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoding(false);
      }
    } catch (err) {
      console.log(err);
      seterrorMessage(err);
      setLoding(false);
    }
  };

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop, //returns the number of pixels that the document has been scrolled vertically from the top of the page.used for older browsers (like Internet Explorer)
      document.documentElement.scrollTop, //similar to document.body.scrollTop, but it works with the <html> element in modern browsers. If the user scrolls down 100 pixels, document.documentElement.scrollTop will also return 100.
      //   Note: In most modern browsers, this is the primary property used to track vertical scroll.
      document.documentElement.scrollHeight, //the total height of the page content (including content that is outside the visible window and requires scrolling)
      document.documentElement.clientHeight //gives you the height of the visible area of the page (the viewport), i.e., how much content can be seen without scrolling.
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    //The result is how much content there is below the fold (the portion of the page that the user can scroll to

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    //remove enetListener to avoid memory leak
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => {
              const { title, id } = dataItem;
              return (
                <div key={id}>
                  <p>{title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

//Use document.body.scrollTop for older browsers and document.documentElement.scrollTop for modern browsers.
