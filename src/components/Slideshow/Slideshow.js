import React, { Component } from "react";
import Slider from "react-slick";
import './Slideshow.css';

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
<div class="slide-centered">Using his skills from years of experience, Chef Boyer will be able to provide you with an education that takes your cooking to where you want it to be—from the comfort of your home kitchen!</div>
  </div>
    )
  };
}

export default Slideshow;