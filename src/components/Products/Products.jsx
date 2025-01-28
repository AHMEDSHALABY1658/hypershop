import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import Product from '../Product/product';
import { useQuery } from '@tanstack/react-query';
import { FaChevronDown } from "react-icons/fa6";

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortValue, setSortValue] = useState("Default");
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    function getProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products');
    }

    const { data, isLoading } = useQuery({
        queryKey: ['getProducts'],
        queryFn: getProducts,
        refetchOnMount: false
    });

    const products = data?.data.data || [];

    // Filter products based on search
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products based on sortValue
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortValue === "High to Low") {
            return b.price - a.price; // Sort by price descending
        } else if (sortValue === "Low to High") {
            return a.price - b.price; // Sort by price ascending
        }
        return 0; // Default (no sort)
    });

    if (isLoading) return <Loading />;

    return (
        <>
            <div className="container my-1 boder-top padding-top">
                <div className="holder-div" style={{marginBottom:"9px"}}>
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '10px',
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    <div className="filter">
                        <div
                            className="Sort"
                            onClick={() => setDropdownVisible(!isDropdownVisible)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h5 >Sort by:</h5>
                            <span style={{ fontSize: "19px" }}>|</span>
                            <div className="value-sort">
                                <h5>{sortValue}</h5>
                                <FaChevronDown />
                            </div>
                        </div>
                        <ul
                            className="value"
                            style={{
                                visibility: isDropdownVisible ? 'visible' : 'hidden',
                                opacity: isDropdownVisible ? 1 : 0,
                                transition: 'visibility 0.2s, opacity 0.2s',
                            }}
                        >
                            {["Default", "High to Low", "Low to High"].map((value) => (
                                <li
                                    key={value}
                                    onClick={() => {
                                        setSortValue(value);
                                        setDropdownVisible(false); // Hide dropdown after selecting
                                    }}
                                >
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map((item) => (
                            <Product item={item} key={item._id} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
