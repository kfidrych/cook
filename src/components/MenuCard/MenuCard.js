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
      <p>$ {props.price}</p>
      </div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post">

      <input type="hidden" name="Julian Skodzinski" value="juliantsk@gmail.com" />

{/* <!-- Specify a Buy Now button. --> */}
<input type="hidden" name="cmd" value="_xclick" />

{/* <!-- Specify details about the item that buyers will purchase. --> */}
<input type="hidden" name="item_name" value={props.title} />
<input type="hidden" name="amount" value={props.price} />
<input type="hidden" name="currency_code" value="USD" />

{/* <!-- Display the payment button. --> */}
<input type="image" name="submit" border="0"
  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
  alt="Buy Now" />

<img alt="" border="0" width="1" height="1"
src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />

</form>
    </div>
);

export default MenuCard;