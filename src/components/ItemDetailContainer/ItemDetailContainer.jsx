import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  //Desestructuramos el objeto del useParams
  //la clave coincide con el nombre que definimos en Route-> :id
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err))
  }, [id]);

  return (
    <main className="detail-wrapper">
      
      <h2 className="detail-title">Producto</h2>
  
      <div className="detail-container">
        {Object.keys(detail).length ? (
          <ItemDetail detail={detail} />
        ) : (
          <p className="detail-loading">Cargando...</p>
        )}
      </div>
  
    </main>
  );
  
};
