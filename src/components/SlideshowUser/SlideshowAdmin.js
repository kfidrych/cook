import React, { Component } from "react";
import Slider from "react-slick";
import './SlideshowAdmin.css';

class Slideshow extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 2500,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 5500,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "0px",
      response: true,
      draggable: true,
      arrows: false
    };

    return (
      <div className="slide-container">
      <Slider {...settings}>
<div>
<img className="img-slide" src="assets/img/closeup/appetizing-beef-black-background-533352.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="../assets/img/closeup/aroma-aromatic-assortment-531446.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="../assets/img/closeup/asparagus-bunch-bundle-539431.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="../assets/img/closeup/berry-close-up-delicious-373065.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="../assets/img/closeup/bubbles-citrus-citrus-fruit-556414.jpg" alt="cook"/> 
  </div>
</Slider>
  </div>
    )
  };
}

export default Slideshow;