const Result = () => {

    // TO-DO
    // add icon for shipping (cond.)
    // add parametric data
    // get data from api response

    return (
        <div className='App-result'>
            <div className='App-result-img'>

            </div>
            <div className='App-result-data'>
                <p className='App-result-data-price'>$1000</p>
                <div className='App-result-data-detail-container'>
                    <p className='App-result-data-detail'>Nombre del producto</p>
                </div>
            </div>
            <div className='App-result-loc'>
                <p className='App-result-loc-detail'>Capital Federal</p>
            </div>
        </div>
     );
}
 
export default Result;