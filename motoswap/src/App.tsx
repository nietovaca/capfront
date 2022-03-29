import './App.css';
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

//Components
import Item from './Item/Item';
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
  
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
    );
    console.log(data);

    const getTotalItems = () => null; 
    const handleAddToCart = (clickedItem: CartItemType) => null; 
    const handleRemoveFromCart = () => null; 

    if (isLoading) return <LinearProgress />;
    if (error) return <div>'Something went wrong ...'</div>
 
  return (
    <Wrapper className="App">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;

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
    // useEffect(() => {
  //   getProducts()
  // }, [])