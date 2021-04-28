import React from 'react';
import logo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import { ContentContext } from '../../contexts/ContentContext';
import { useHistory, Redirect } from "react-router-dom";

const Searchbar = props => {

    const { search, setSearch, setResults, history, setHistory } = React.useContext(ContentContext)

    let _history = useHistory();

    const handleKeypress = e => {
        // triggers by pressing the enter key
        if (e.keyCode === 13) {
            getResults(search);
        }
    };

    const handleOnChange = e => {
        setSearch(e.target.value)
    };

    const getResults = q => {
        fetch(`http://localhost:3001/api/items?q=${q}`)
            .then(res => res.json())
            .then(results => setResults(results))
            .catch(e => console.error(e))
    }

    const triggerSearch = async e => {
        getResults(search)        
        setHistory(history + 1)
        _history.push(`/items?search=${search}`)
    }

    return (
        <div className='App-searchbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <input placeholder='Nunca dejes de buscar' className='App-searchbar-input' type='text' onChange={e => handleOnChange(e)} onKeyPress={e => handleKeypress(e)} />
            <div role='button' aria-pressed="false" className="App-search-icon-container" onClick={e => triggerSearch(e)}>
                <img src={searchIcon} onClick={e => triggerSearch(e)} className="App-search-icon" alt="search icon" />
            </div>
        </div>
    );
}

export default Searchbar;