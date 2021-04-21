const Detail = () => {
    return (
        <div className='App-detail'>
            <div className='App-detail-content'>
                <div className='App-detail-img'>

                </div>
                <div className='App-detail-content-data'>
                    <p className='App-detail-condition'>Condition</p>
                    <p className='App-detail-title'>Product title</p>
                    <p className='App-detail-price'>$1000</p>
                    <button className='App-detail-button'>Comprar</button>
                </div>
            </div>
            <div className='App-detail-description'>
                <p className='App-detail-description-title'>Description</p>
                <p className='App-detail-description-text'>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
}

export default Detail;