import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  //const appClass = false ? "App dark" : "App light"
  const [isOn, setIsOn] = useState(false);
  const appClass = isOn ?"App dark":"App light"

  function handleClick(){
    setIsOn((isOn=>!isOn))
   }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn?"Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
