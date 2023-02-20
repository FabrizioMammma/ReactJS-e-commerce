import { BsCartPlus } from 'react-icons/bs'
import './CartWidget.css';

function CartWidget(){
    return (
        <div className='divCartWidget'>
            <BsCartPlus className='divCartWidget--logo'></BsCartPlus>
            <span className='divCartWidget--span'>5</span>
        </div>

    );
};

export default CartWidget;