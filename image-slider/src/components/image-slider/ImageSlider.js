import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ImageSlider = ({ page, limit, url }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('No Image Found');
      } else {
        const data = await response.json();

        if (data) {
          setImage(data);
          setLoading(false);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== '') fetchData();
  }, [url]);

  if (loading) {
    return <div>Loading...Please wait</div>;
  }
  if (errorMessage !== null) {
    return <div>Error occured! {errorMessage}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((item, index) => {
            const { id, download_url, url } = item;
            return (
              <img
                key={id}
                src={download_url}
                alt={download_url}
                className={
                  currentSlide === index
                    ? 'current-image'
                    : 'current-image hide-current-image'
                }
              />
            );
          })
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {image.map((_, index) => {
          return image && image.length ? (
            <button
              key={index}
              className={
                currentSlide === index
                  ? 'current-indicator'
                  : 'current-indicator inactive-indicator'
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ) : null;
        })}
      </span>
    </div>
  );
};

export default ImageSlider;
