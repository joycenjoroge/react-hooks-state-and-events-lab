import React from "react";
import Item from "./Item";
import { useState ,useEffect,useMemo} from "react";

function ShoppingList({ items }) {
 
  const [shoppingList, setShoppingList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setShoppingList(items);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return shoppingList;
    }
    return shoppingList.filter((item) => item.category === selectedCategory);
  }

  let filteredList =useMemo(getFilteredList,[selectedCategory,shoppingList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
 }
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
