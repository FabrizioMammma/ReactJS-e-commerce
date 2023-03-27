import './CartWidget.css';
import '../Navbar/NavBar.css';
import { useContext } from 'react';
import cartContext from '../../Context/cartContext';

function CartWidget() {

    const { cart } = useContext(cartContext);
    const cartLenght = cart.reduce((acc, cur) => acc + cur.count, 0);

    if (cartLenght === 0) {
        return (
            <div className='divCartWidget'>
                <i className='bi bi-bag-plus nav-menu-item'></i>
            </div>
        )
    } else {
        return (
            <div className='divCartWidget'>
                <i className='bi bi-bag-plus nav-menu-item'></i>
                <span className='divCartWidget--span'>{cartLenght}</span>
            </div>
        )
    };
};

export default CartWidget;