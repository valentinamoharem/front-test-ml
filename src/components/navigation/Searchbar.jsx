import logo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';

const Searchbar = () => {

    // TO-DO
    // fix proportions and add search logic
    // handle input change and onkeydown (enter key) triggers

    return (
        <div className='App-searchbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <input placeholder='Nunca dejes de buscar' className='App-searchbar-input' type='text' />
            <div className="App-search-icon-container"><img src={searchIcon} className="App-search-icon" alt="search icon" /></div>
        </div>
     );
}
 
export default Searchbar;