import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid'
import Items from "./Items";
import { ToastContainer, toast } from 'react-toastify';

// Get locale storage
const getLocaleStorage = () => {
  let list = localStorage.getItem("my-list");
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }

  return list;
}
const defaultList = JSON.parse(localStorage.getItem("my-list") || "[]");

const setLocalStorage = (items) => localStorage.setItem("my-list", JSON.stringify(items));

const App = () => {
  // const [items, setItems] = useState(getLocaleStorage());
  const [items, setItems] = useState(defaultList);


  const addItem = (itemName) => {
    const newItem = { id: nanoid(), completed: false, name: itemName };
    const newItems = [...items, newItem]
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  }

  const removeItem = (itemId) => {
    let newItems = items.filter(item => itemId !== item.id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item removed from the list");

  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId === item.id) {
        const newItem = {
          ...item,
          completed: !item.completed
        }
        return newItem;
      }
      return item;
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>)


};

export default App;
