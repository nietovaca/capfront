import Button from '@mui/material/Button'
//Types
import { CartItemType } from '../App';
import Item from '../Item/Item';
//Styles 
import { Wrapper } from './CartItem.styles';

type Props = {
    item: CartItemType; 
    addToCart: (clickedItem: CartItemType)  => void; 
    removeFromCart: (id: number) => void; 
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                
            </div>

        </div>
    </Wrapper>
);

export default CartItem; 
