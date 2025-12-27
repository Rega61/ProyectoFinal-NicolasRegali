import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../../components/ItemList/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId, brandId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    let q = productsRef;

    if (categoryId) {
      q = query(productsRef, where("categoria", "==", categoryId));
    } else if (brandId) {
      q = query(productsRef, where("marca", "==", brandId));
    }

    getDocs(q)
      .then(res => {
        const products = res.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId, brandId]);

  if (loading) {
    return <h2 className="text-center mt-5">Cargando catálogo de productos...</h2>;
  }

  if (!items || items.length === 0) {
    return <h2 className="text-center mt-5">No hay productos disponibles</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">
        {categoryId
          ? `Categoría: ${categoryId}`
          : brandId
          ? `Marca: ${brandId}`
          : "Catálogo de productos"}
      </h2>

      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
