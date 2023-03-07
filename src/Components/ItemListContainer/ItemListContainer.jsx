const ItemListContainer = ({props}) => {
    console.log('props :>> ', props);
    return ( 
        <div><h1>{props.titulo1}</h1></div>
    );
}
export default ItemListContainer;