import React from "react";
import styles from "./Child.module.css";
export default function Child(props) {
  const product = props.product;

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="border">
          <img
            height="300px"
            className="w-100 "
            src={product.thumbnail}
            alt="Product Thumbnail"
          />
          <div className="p-3">
            <h4>{product.title}</h4>
            <p className={styles.productDesc}>{product.description}</p>
            <span className="fw-bold">
              Stock: <span className="text-success">{product.stock}</span>
            </span>
            <input className="d-block w-25 form-control mt-2" type="number" />
            <button className="btn btn-dark d-block w-100 mt-2">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}
