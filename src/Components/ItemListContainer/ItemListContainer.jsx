import { useState, useEffect } from 'react';
import {getBestSeller} from '../../Services/BestSellers/BestSellersService'
import ItemList from '../ItemList/ItemList'
import Spinners from '../Spinner/Spinners';

const ItemListContainer = () => {
    const [bestSeller, setBestSeller] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getBestSeller()
        .then((response)=>{
            setBestSeller(response)
            setLoading(false)
        })
    }, [])
    return ( 
        <div className='contenedorSpinner d-flex align-items-center justify-content-center'>
            {loading ? (
                <Spinners/>
            ):(
                <ItemList bestSeller={bestSeller}/>
            )}
            {/* {
                loading ? <Spinners/> : <Spinners/>
            } */}
        </div>
    );
}
export default ItemListContainer;