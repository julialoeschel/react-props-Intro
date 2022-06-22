import React from "react";
import "./Card.css";

export default function Cards({ children, name, age, speaking, location }) {
  // console.log(props);
  return (
    <>
      <section className={speaking ? "card cardContainer--active" : "card"}>
        <h2>
          {name || children}
          {speaking ? <span>🗣</span> : null}
        </h2>
        <img
          src="https://source.unsplash.com/random/200x200/?person"
          alt="a person"
        />
        <p>
          {name || children} is {age + " "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          cumque, veritatis, dolorum natus quidem velit aliquam quo recusandae a
          aperiam aspernatur id. Atque libero itaque porro placeat facilis
          adipisci dolores!
        </p>
        <span className="additional">{location}</span>
      </section>
    </>
  );
}
