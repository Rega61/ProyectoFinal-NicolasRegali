import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setItem(null);

    const ref = doc(db, "products", itemId);

    getDoc(ref)
      .then(res => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <h2 className="text-center mt-5">
        Cargando detalle del producto...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center mt-5 text-danger">
        Producto no encontrado
      </h2>
    );
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
