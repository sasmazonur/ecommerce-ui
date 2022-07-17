import {useState, useEffect} from 'react'
import styled from "styled-components";
import {popularProducts} from "../data.js";
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

/* Getting the products from the database. */
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    cat
                      ? `http://localhost:8000/api/products?category=${cat}`
                      : "http://localhost:8000/api/products"
                  );
                setProducts(response.data);                
            } catch (error) {
                
            }
        }
        getProducts();
    }, [cat]);

/* Filtering the products based on the filters. */
    useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
              
            )
            
          );
      }, [products, cat, filters]);
      
/* Sorting the products based on the sort value. */
      useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);
      
/* Returning the products. */
    return (
        <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
    )
  }
  export default Products;