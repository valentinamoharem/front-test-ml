import React from 'react';
import { useParams } from "react-router-dom";

const Detail = () => {

    // fix item by id endpoint

    const [product, setProduct] = React.useState(null);
    let { id } = useParams();


    React.useEffect(async () => {

        // const fetchedProduct = await fetch(`http://localhost:3001/api/items/${id}`);s
        // setProduct(fetchedProduct.data);
        
        setProduct({
            "id": 'json.id',
            "title": 'Apple Ipad lorem ipsum dolor sit amet dsjakdnakdakdak dsajkdsakda',
            "price": {
              "currency": 'ARS',
              "amount": '1009000',
              "decimals": '00'
              },
              "picture": 'https://http2.mlstatic.com/D_971577-MLA44099619331_112020-O.jpg',
              "condition": 'new',
              "free_shipping": false,
            "sold_quantity": '10',
            "description": 'LOREM IPSUM DOLOR SIT AMET hdsajkdbakdakbadsjk dsjkandjkabd hsjahdkadbjka asdada hsdajdhakdhajdhadbk jhsjkahdjkabdkjabd jdsakdnajkdbajkbd hsjsbs jsajkdnakbd hdsjdakbdakjbdakb jdhadbk jhsjkahdjkabdkjabd jdsakdnajkdbajkbd hsjsbs jsajkdnakbd hdsjdakbdakjbda',
          })
    }, []);

    if (!product) {
        return (<p>Cargando...</p>)
    }

    return (
        <div className='App-detail'>
            <div className='App-detail-content'>
                <div className='App-detail-img-container'>
                    <img src={product.picture} className='App-detail-img' alt="product image" />
                </div>
                <div className='App-detail-content-data'>
                    <p className='App-detail-condition'>{(product.condition == 'new' ? 'Nuevo' : 'Usado' ) + ' | ' +  (product.sold_quantity + ' vendidos')}</p>
                    <p className='App-detail-title'>{product.title}</p>
                    <p className='App-detail-price'>{ (product.price.currency == 'ARS' ? '$' : product.price.currency)  + '' + new Intl.NumberFormat("de-DE").format(product.price.amount) }<span className='App-detail-price-decimals'>{product.price.decimals}</span></p>
                    <button className='App-detail-button'>Comprar</button>
                </div>
            </div>
            <div className='App-detail-description'>
                <p className='App-detail-description-title'>Descripción</p>
                <p className='App-detail-description-text'>{product.description}</p>
            </div>
        </div>
    );
}

export default Detail;