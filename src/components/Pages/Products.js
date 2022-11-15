import React from 'react';
import '../../App.scss';
import {Link, useParams, useLocation} from "react-router-dom";
export  function Products(props) {
console.log(props);
 const data = useLocation().state?.data;
  return (
  
  <h1 className='products'>{data ? data.name : "Kamil"}</h1>
  
  )
}
export default Products;