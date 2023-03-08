import './CartWidget.css';
import '../Navbar/NavBar.css';

function CartWidget(){
    return (
        <div className='divCartWidget'>
            <i className='bi bi-bag-plus nav-menu-item'></i>
            <span className='divCartWidget--span'>5</span>
        </div>

    );
};

export default CartWidget;