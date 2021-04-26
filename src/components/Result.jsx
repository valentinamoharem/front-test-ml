const Result = props => {

    // TO-DO
    // add icon for shipping (cond.)
    // add parametric location

    return (
        <div className='App-result'>
            <img src={props.result.picture} className='App-result-img' alt="search result image" />
            <div className='App-result-data'>
                <p className='App-result-data-price'>{props.result.price.currency + props.result.price.amount}</p>
                <div className='App-result-data-detail-container'>
                    <p className='App-result-data-detail'>{props.result.title}</p>
                </div>
            </div>
            <div className='App-result-loc'>
                <p className='App-result-loc-detail'>Capital Federal</p>
            </div>
        </div>
    );
}

export default Result;