import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

export default function Edit() {
  const { pId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCat] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/${pId}`)
      .then((res) => res.data)
      .then((data) => {
        setTitle(data.title);
        setDesc(data.description);
        setPrice(data.price);
        setCat(data.category);
        setImgUrl(data.thumbnail);
      });

    // fetch(`http://localhost:9000/products/${pId}`)
    // .then(res => res.json())
    // .then(data => {
    //     setTitle(data.title)
    //     setDesc(data.description)
    //     setPrice(data.price)
    //     setCat(data.category)
    //     setImgUrl(data.thumbnail)
    // })
  }, []);

  const addData = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      price === "" ||
      category === "" ||
      imgUrl === ""
    ) {
      Swal.fire("Please Fill All Field");
    } else {
      axios.put(`http://localhost:9000/products/${pId}`, {
        title,
        description,
        price,
        category,
        thumbnail: imgUrl,
      });
      // .then(res => console.log(res))

      // fetch(`http://localhost:9000/products/${pId}`, {
      //     method: "PUT",
      //     body: JSON.stringify({
      //         title,
      //         description,
      //         price,
      //         category,
      //         thumbnail: imgUrl
      //     }),
      //     headers: {
      //         "Content-type": "application/json"
      //     }
      // })
      // // .then(res => console.log(res));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Updated Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/products");
    }
  };

  return (
    <>
      <Header
        title={`Edit Product #${pId}`}
        btn={
          <Link className="text-light text-decoration-none fs-5" to="/Products">
            Home
          </Link>
        }
      />
      <form
        onSubmit={(e) => addData(e)}
        className="m-auto"
        style={{ width: "500px" }}
      >
        <div>
          <label className="fw-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-100 mb-3 p-1"
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div>
          <label className="fw-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={description}
            className="w-100 mb-3 p-1"
            id="description"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <label className="fw-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            onChange={(e) => setCat(e.target.value)}
            className="w-100 mb-4 p-1"
            id="category"
          >
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home-decoration</option>
            <option value="furniture">furniture</option>
            <option value="lighting">lighting</option>
            <option value="motorcycle">motorcycle</option>
            <option value="sunglasses">sunglasses</option>
          </select>
        </div>
        <div>
          <label className="fw-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-100 mb-3 p-1"
            type="text"
            id="price"
            placeholder="Price"
          />
        </div>
        <div>
          <label className="fw-bold mb-2" htmlFor="imgurl">
            Image URL
          </label>
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            value={imgUrl}
            className="w-100 mb-4 p-1"
            type="url"
            id="imgurl"
            placeholder="Image URL"
          />
        </div>
        <button type="submit" className="btn btn-info w-100">
          Edit
        </button>
      </form>
    </>
  );
}
