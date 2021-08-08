import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-9.jpg"}
              text="we organise the products in a good and safe way."
              label="Organise"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
              text="Help you buy medicine at home with your prescription."
              label="Services"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
              text="this online pharmacy is open 24/7 and has everything you need."
              label="Time"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
              text="Protect yourself and others
              Wash your hands before putting on your mask, as well as before and after taking it off,   Make sure it covers both your nose, mouth and chin."
              label="Protection"
              path="/products"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-8.jpg"}
              text="buy with confidence cancel anytime
              we provide a secure system for our clients / patients."
              label="Security"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
