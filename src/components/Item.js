import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);
  const itemClass = isOn ?"in-cart":" "

  function handleClick(){
    setIsOn((isOn=>!isOn))
   }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isOn? "Remove to Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
