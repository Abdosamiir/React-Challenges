import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    // console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;