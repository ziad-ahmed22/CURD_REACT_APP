import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

export default function View() {
    const {pId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:9000/products/${pId}`)
        .then(res => res.data)
        .then(data => setProduct(data))

        // fetch(`http://localhost:9000/products/${pId}`)
        // .then(res => res.json())
        // .then(data => setProduct(data))
    }, [])

    return (
        <>
            <Header title={`Product #${pId}`} btn={<Link className='text-light text-decoration-none fs-5' to="/Products">Home</Link>}/>

            <div className="product d-lg-flex justify-content-center">
                <div className="img me-lg-5 mb-5">
                    <img src={product.thumbnail} alt="Image Not Found" style={{width:"100%"}}/>
                </div>
                <div className="info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Price:</b> {product.price}</p>
                </div>
            </div>
        </>
    )
}