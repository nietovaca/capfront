import './App.css';
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

//Components
import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Styles 
import { Wrapper } from './App.styles';

//Types 
export type CartItemType = {
  id: number; 
  category: number; 
  title: string; 
  description: string; 
  image: string; 
  price: number; 
  in_stock: boolean; 
  is_active: boolean; 
  created: string;
  updated: string; 
};

const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('http://backcap.herokuapp.com/api/products')).json();


const App = () => {
  // let [products, setProducts] = useState([{}])

  // const getProducts = () => {
  //   axios
  //     .get('http://backcap.herokuapp.com/api/products')
  //     .then(
  //       (response) => setProducts(response.data),
  //       (err) => console.log(err)
  //     )
  //     .catch((error) => console.error(error))
  // }

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
    );
    console.log(data);
 
  // useEffect(() => {
  //   getProducts()
  // }, [])

  return (
    <div className="App">
    Start 
    </div>
  );
}

export default App;
