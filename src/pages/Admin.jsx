import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Admin() {
  const [product, setProduct] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    estado: "",
    precio: "",
    stock: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      nombre: product.nombre,
      marca: product.marca,
      categoria: product.categoria,
      estado: product.estado,
      descripcion: product.descripcion,
      precio: Number(product.precio),
      stock: Number(product.stock),
    };

    addDoc(collection(db, "products"), newProduct)
      .then(() => {
        alert("Producto creado correctamente");
        setProduct({
          nombre: "",
          marca: "",
          categoria: "",
          estado: "",
          precio: "",
          stock: "",
          descripcion: "",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>Panel Admin</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre del producto"
          className="form-control mb-2"
          value={product.nombre}
          onChange={handleChange}
          required
        />

        <select
          name="marca"
          className="form-control mb-2"
          value={product.marca}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar marca</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
        </select>

        <select
          name="categoria"
          className="form-control mb-2"
          value={product.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar categoría</option>
          <option value="Celulares">Celulares</option>
          <option value="Accesorios">Accesorios</option>
        </select>

        <select
          name="estado"
          className="form-control mb-2"
          value={product.estado}
          onChange={handleChange}
          required
        >
          <option value="">Estado</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Usado">Usado</option>
        </select>

        <input
          name="precio"
          type="number"
          placeholder="Precio"
          className="form-control mb-2"
          value={product.precio}
          onChange={handleChange}
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          className="form-control mb-2"
          value={product.stock}
          onChange={handleChange}
          required
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="form-control mb-3"
          value={product.descripcion}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">
          Agregar producto
        </button>
      </form>
    </div>
  );
}

export default Admin;
