import { useContext, useEffect, useState } from "react";
import React from 'react';
import ContentContext from "../../contexts/ContentContext";
import { useParams } from 'react-router-dom'

const Breadcrumbs = props => {

    const { results } = useContext(ContentContext);
    const [category, setCategory] = useState(null);
    let { id } = useParams();

    useEffect(async () => {
        if (!results[0]) {
            return <div></div>
        }
        else if(id) {
            let findItem = results[0].items.find(i => i.id == id)
            let findCategory = await fetch(`http://localhost:3001/api/categories/${findItem.category_id}`).then(res => res.json());
            setCategory(findCategory[0].category)
        } else if(!id) {
            setCategory(results[0].categories[0])
        }
    }, [id, results])

    return (
        <div className='App-breadcrumbs'>
            <p>{category && category.name}</p>
        </div>
    );
}

export default Breadcrumbs;