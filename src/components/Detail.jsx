import React from 'react';
import { useParams } from "react-router-dom";
import ContentContext from '../contexts/ContentContext';

const Detail = () => {

    // fix item by id endpoint
    const {results} = React.useContext(ContentContext);
    const [product, setProduct] = React.useState(null);
    let { id } = useParams();


    React.useEffect(async () => {

        // const fetchedProduct = await fetch(`http://localhost:3001/api/items/${id}`);
        // setProduct(fetchedProduct.data);

        const fetchedProduct = await fetch(`http://localhost:3001/api/items/description/${id}`).then(res => res.json());

        if (!results) {
            return
        }
        
        const findItem = results[0].items.find(i => i.id == id)

        setProduct({
            "id": findItem.id,
            "title": findItem.title,
            "price": {
                "currency": findItem.price.currency_id,
                "amount": findItem.price.amount,
                "decimals": findItem.price.decimals
            },
            "picture": findItem.picture,
            "condition": findItem.condition,
            "free_shipping": findItem.free_shipping,
            "category_id": findItem.category_id,
            "sold_quantity": findItem.sold_quantity || '',
            "description": fetchedProduct[0].description.plain_text || 'No se encontró descripción para este producto.',
        })
    }, []);

    if (!product || !results) {
        return (<p>Cargando...</p>)
    }

    return (
        <div className='App-detail'>
            <div className='App-detail-content'>
                <div className='App-detail-img-container'>
                    <img src={product && product.picture} className='App-detail-img' alt="product image" />
                </div>
                <div className='App-detail-content-data'>
                    <p className='App-detail-condition'>{product && (product.condition == 'new' ? 'Nuevo' : 'Usado') + (product.sold_quantity != '' ? (' | ' + (product.sold_quantity + ' vendidos')) : '')}</p>
                    <p className='App-detail-title'>{product && product.title}</p>
                    <p className='App-detail-price'>{product && (product.price.currency == 'ARS' ? '$' : '$') + '' + new Intl.NumberFormat("de-DE").format(product.price.amount)}<span className='App-detail-price-decimals'>{product.price.decimals}</span></p>
                    <button className='App-detail-button'>Comprar</button>
                </div>
            </div>
            <div className='App-detail-description'>
                <p className='App-detail-description-title'>Descripción</p>
                <p className='App-detail-description-text'>{product && product.description}</p>
            </div>
        </div>
    );
}

export default Detail;