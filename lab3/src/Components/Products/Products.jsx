import React from "react";
import useFetch from "../Hooks/useFetch";
import { Fragment } from "react";
import styles from "./Products.module.css";

export default function Products() {
  const { data, loading, error } = useFetch("http://localhost:2000/products");

  if (loading) {
    return (
      <>
        <div class="container mt-5 text-center min-vh-100 d-flex justify-content-center align-items-center">
          <div>
            <h2>Data is loading...</h2>

            <div class="spinner-border" role="status"></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <h2 className="alert alert-danger w-100 text-center ">
            Error: {error.message}
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Products</h2>

      <div className="row g-2 border mt-1">
        {data.map((product, index) => (
          <Fragment key={index}>
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
                  <input
                    className="d-block w-25 form-control mt-2"
                    type="number"
                  />
                  <button className="btn btn-dark d-block w-100 mt-2">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
