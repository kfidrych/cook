import React from 'react';
// import "./UserCard.css";

// const user = {
//     basicInfo: {
//       name: "Katie Wang",
//       location: "Philadelphia, PA",
//       photo: "http://lorempixel.com/500/500/people",
//     }
//   };
  
const UserCard = props =>
  <div className="card">
    <div className="img-container">
        <img alt={props.title} src={props.imageSrc} />
    </div>
    <div className="content">
      <h1>{props.userName}</h1>
      <p>{props.userLocation}</p>
    </div>
  </div>

export default UserCard;