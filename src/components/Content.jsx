import { useEffect, useState } from "react";
import Result from "./Result"

const Content = () => {

    // map through resutls from api response

    const [results, setResults] = useState([{"id": 'String',
    "title": 'String',
    "price": {
        "currency": 'String',
        "amount": 'String',
        "decimals": 'String'
    },
    "picture": 'String',
    "condition": 'String',
    "free_shipping": false}])

    return ( 
        <div className='App-content'>
            {results && results.map(r => {
                return <div>
                    <Result result={r} />
                    <hr />
                </div>
            })}
        </div>
     );
}
 
export default Content;