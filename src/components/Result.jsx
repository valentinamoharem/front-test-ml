import { Redirect, useHistory } from "react-router-dom";
import icon from '../assets/ic_shipping.png'

const Result = props => {

    let history = useHistory();

    const handleRedirect = () => {
        history.push(`/items/${props.result.id}`)
    }

    return (
        <div className='App-result' onClick={handleRedirect}>
            <img src={props.result.picture} className='App-result-img' alt="search result image" />
            <div className='App-result-data'>
                <p className='App-result-data-price'>{ (props.result.price.currency == 'ARS' ? '$' : props.result.price.currency + '$')  + '' + new Intl.NumberFormat("de-DE").format(props.result.price.amount)}{(props.result.free_shipping ? <span><img className='App-result-data-shipping-icon' src={icon} /></span> : <span></span>) }</p>
                <div className='App-result-data-detail-container'>
                    <p className='App-result-data-detail'>{props.result.title}</p>
                </div>
            </div>
            <div className='App-result-loc'>
                <p className='App-result-loc-detail'>{props.result.location}</p>
            </div>
        </div>
    );
}

export default Result;