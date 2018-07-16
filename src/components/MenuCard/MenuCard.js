import React from "react";
import "./MenuCard.css"

const MenuCard = (props) => (
  <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.imageSrc} />
      </div>
      <div className="content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </div>
      <form action="/charge" method="POST">
    <script
      src="https://checkout.stripe.com/checkout.js" class="stripe-button"
      data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
      data-amount={props.price}
      data-currency="usd"
      data-name="Cooky"
      data-label="Purchase Class"
      data-description={props.title}
      data-image="../../public/assets/img/logo.png"
      data-zip-code="true"
      data-locale="auto">
    </script>
  </form> 
    </div>
);

export default MenuCard;