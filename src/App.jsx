import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid'
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = { id: nanoid(), completed: false, name: itemName };
    setItems([...items, newItem])
    console.log(newItem);
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} />
    </section>)


};

export default App;
