const Item = ({title, img, description, price}) => {
    return ( 
        <>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="thumbnail m-3 p-3">
                    <div id="imgRotate" className="imgRotate">
                        <img src={img} alt="Imagen" className="card-img-top thumbnail__img"/>
                    </div>
                        <div className="card-body p-3 my-2">
                            <h2 className="card-title text-center">{title}</h2>
                                <p className="card-text">{description}</p>
                                <div className="card__precio d-flex align-items-center justify-content-between p-1">
                                    <span><strong>{`$${price}`}</strong></span>
                                    <button className="btn">Comprar</button>
                                </div>
                        </div>
                </div>
            </div>
        </>
    );
}
export default Item;