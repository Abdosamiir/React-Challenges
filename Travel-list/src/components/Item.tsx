// import { Item } from "./App";

// type Prop = {
//   item: Item;
//   onDeleteItem: (id: number) => void;
//   onToggleItem: (id: number) => void;
// };

// import React from "react";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface Prop {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

function Item({ item, onDeleteItem, onToggleItem }: Prop) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default Item;
