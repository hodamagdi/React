import React, { useCallback, useState } from "react";
import axios from "axios";

const AddPrd = () => {
  const [Prd, setPrd] = useState({
    title: "",
    description: "",
    stock: 0,
    thumbnail: "https://source.unsplash.com/random",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setPrd((old) => ({
      ...old,
      [name]: value,
    }));
  });

  const addPrd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/products", Prd)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("Product successfully added!");
        setPrd({
          title: "",
          description: "",
          stock: 0,
          thumbnail: "https://source.unsplash.com/random",
        });
        setErrorMessage(""); 
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage("");
        setErrorMessage("Error adding product. Please try again.");
      });
  };

  return (
    <div>
      <h1>Add New Product</h1>
   
      <form action="" onSubmit={addPrd}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            name="title"
            value={Prd.title}
            onChange={handleChange}
          />
          <label htmlFor="title">Product title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            name="description"
            value={Prd.description}
            onChange={handleChange}
          />
          <label htmlFor="description">Product description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="stock"
            placeholder="Stock"
            name="stock"
            value={Prd.stock}
            onChange={handleChange}
          />
          <label htmlFor="stock">Product stock</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            placeholder="Thumbnail"
            name="thumbnail"
            value={Prd.thumbnail}
            onChange={handleChange}
          />
          <label htmlFor="thumbnail">Product thumbnail</label>
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
      {successMessage && <p className="text-center" style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p className="text-center" style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default AddPrd;
