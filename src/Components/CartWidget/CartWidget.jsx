import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return ( 
        <div>
            <FontAwesomeIcon className="icono__carrito" icon={faCartShopping} />
        </div>
    );
}
export default CartWidget;