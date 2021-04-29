import { useContext, useEffect, useState } from "react";
import ContentContext from "../contexts/ContentContext";
import Result from "./Result"

const Content = () => {
    const { results, history } = useContext(ContentContext);

    if(!results[0] || results[0].length == 0){
        if(history > 1) {
            return <div className='App-content-alt'>No se encontraron resultados. Intentá de nuevo.</div>
        } else {
            return <div className='App-content-alt'></div>
        }
    }

    return ( 
        <div className='App-content'>
            {results[0] && results[0].items.map(r => {
                return <div>
                    <Result key={r.id} result={r} />
                    <hr />
                </div>
            })}
        </div>
     );
}
 
export default Content;