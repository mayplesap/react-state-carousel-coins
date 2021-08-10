import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

/** Carousel
 * Props:
 * - cardData - array of card objects with src & caption 
 * - title - string
 * 
 * State:
 * - cardIdx - index of item for cardData
 */
function Carousel(props) {
  //cardIdx has state
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);

  //className={cardIdx === 0 ? "fas fa-chevron-circle-left fa-2x hidden" : "fas fa-chevron-circle-left fa-2x"}

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className= {`fas fa-chevron-circle-left fa-2x ${cardIdx === 0 ? 'hidden' : ''}`}
          onClick={goBackward}
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${cardIdx === total-1 ? 'hidden' : ''}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
