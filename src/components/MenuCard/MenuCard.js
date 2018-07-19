import React, { Component } from "react";
import { db } from '../../firebase';
import "./MenuCard.css"

class MenuCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: {}
    };
  }

  componentDidMount() {
    db.onceGetAppointments().then(snapshot =>
      this.setState(() => ({ appointments: snapshot.val() }))
    );
  }

  render() {
    const { appointments } = this.state;
    return (
      <div className="card">
      <div className="img-container">
        <img alt={this.props.title} src={this.props.imageSrc} />
      </div>
      <div className="content">
      <h1>{this.props.title}</h1>
      <p>{this.props.description}</p>
      <p>$ {this.props.price}</p>
      <form id="payPalForm" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_xclick" />
<input type="hidden" name="business" value="juliantsk-facilitator@gmail.com" />
<input type="hidden" name="lc" value="US" />
<input type="hidden" name="item_name" value="Sample Buy Now Button" />
<input type="hidden" name="amount" value="0.01" />
<input type="hidden" name="currency_code" value="USD" />
<input type="hidden" name="button_subtype" value="services" />
<input type="hidden" name="no_note" value="1" />
<input type="hidden" name="no_shipping" value="1" />
<input type="hidden" name="rm" value="1" />
<input type="hidden" name="return" value="https://desolate-castle-96401.herokuapp.com/" />
<input type="hidden" name="cancel_return" value="https://desolate-castle-96401.herokuapp.com/" />
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHosted" />
<table>
<tr><td><input type="hidden" name="on0" value="Available Appointments" />Available Appointments</td></tr><tr><td><select name="os0">
  {Object.keys(appointments).map(key =>
  (appointments[key].user === "") ?
<option value={appointments[key].date + " " + appointments[key].time}>{appointments[key].date + " " + appointments[key].time}</option>: "")}
</select> </td></tr>
</table>
<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
      </div>
      


    </div>
    )
  };
}

export default MenuCard;