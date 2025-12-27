import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map(item => (
        <div className="col-md-4" key={item.id}>
          <Item
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
