import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid'

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
      {<div>{items.name}</div>}
    </section>)


};

export default App;
