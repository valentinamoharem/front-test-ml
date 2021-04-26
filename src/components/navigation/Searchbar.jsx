import React from 'react';
import logo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';

const Searchbar = () => {

    // TO-DO
    // handle search button and onkeydown (enter key) triggers

    const [search, setSearch] = React.useState('')

    const getResults = q => {
        fetch(`http://localhost:3001/api/items?q=${q}`)
            .then((res) => res.json())
            .then((res) => { console.log(res) })
    }

    const handleOnChange = e => {
        setSearch(e.target.value)
    };

    React.useEffect(() => {
        const timeoutId = setTimeout(() => getResults(search), 1000);
        return () => clearTimeout(timeoutId);
    }, [search]);

    return (
        <div className='App-searchbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <input placeholder='Nunca dejes de buscar' className='App-searchbar-input' type='text' onChange={e => handleOnChange(e)}/>
            <div role='button' aria-pressed="false" onClick={() => console.log('pressed')} className="App-search-icon-container"><img src={searchIcon} className="App-search-icon" alt="search icon" /></div>
        </div>
    );
}

export default Searchbar;