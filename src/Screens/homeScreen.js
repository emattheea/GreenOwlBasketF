import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Product from '../components/product';




function HomeScreen(){
    const [products,setProducts] = useState([]);

    useEffect(() => {
     Axios
        .get('https://fakestoreapi.com/products')
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
        .then( response =>{
            console.log(response)
            setProducts(response.data)
    })
        .catch ( err => {
            console.log(err)
    })
          
    
    },[]);

    return (
    
          <div className="row center">
            {products.map((product) => (
              < Product key={products._id} product={product}></Product>
            ))}
          </div>
       
    )
}

export default HomeScreen;