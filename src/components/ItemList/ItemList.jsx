import Item from "../Item/Item";

export default function ItemList({ products }) {


  return (
    <>
      <div className="cardProducts">
        {products.map((products) => (
          <Item key={products.id} products={products} />
        ))}
      </div>
    </>
  );
}