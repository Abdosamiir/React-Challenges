import { Item } from "./App";

type Prop = {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: Prop) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed as unknown as string}
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
