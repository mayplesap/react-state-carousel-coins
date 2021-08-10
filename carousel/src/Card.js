import React from "react";
import "./Card.css";

/** Creates a card with props of:
 * - caption - string
 * - src - image
 * - currNum - number 
 * - totalNum - number
 */
function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.caption}</h4>
      <img className="Card-image" src={props.src} alt={props.caption} />
      <small className="Card-small">
        Image {props.currNum} of {props.totalNum}.
      </small>
    </div>
  );
}

export default Card;
