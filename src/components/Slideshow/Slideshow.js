import React, { Component } from "react";
import Slider from "react-slick";
import './Slideshow.css';

class Slideshow extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "0px",
      response: true,
      draggable: true,
      arrows: false
    };

    return (
      <Slider {...settings}>
<div>
<img className="img-slide" src="assets/img/slide/agriculture-blur-close-up-33783.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/appetizer-breakfast-cuisine-326278.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/appetizer-brunch-close-up-1095550.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/baked-baker-ball-shaped-745988.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/basil-cook-cooking-691114.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/basil-delicious-food-459469.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/beverages-brunch-cocktail-5317.jpg" alt="cook"/> 
  </div>
<div>
<img className="img-slide" src="assets/img/slide/crust-delicious-dinner-568370.jpg" alt="cook"/> 
  </div>
</Slider>
    )
  };
}

export default Slideshow;