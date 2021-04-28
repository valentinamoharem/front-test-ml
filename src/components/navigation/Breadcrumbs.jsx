import { useContext } from "react";
import React from 'react';
import ContentContext from "../../contexts/ContentContext";
import { useParams } from 'react-router-dom'

const Breadcrumbs = props => {

    const { results } = useContext(ContentContext);
    let { id } = useParams();

    if (!results[0]) {
        return <div></div>
    }

    let category = results[0] && results[0].categories[0];

    if(props.categorySearch){
        category = results[0].categories.find(c => c.id == id);
    }

    return (
        <div className='App-breadcrumbs'>
            <p>{category && category.name}</p>
        </div>
    );
}

export default Breadcrumbs;