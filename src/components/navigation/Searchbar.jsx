import logo from '../../logo.svg';

const Searchbar = () => {
    // container, placeholder, search icon
    return (
        <div className='App-searchbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <input placeholder='Buscar...' className='App-searchbar-input' type='text' />
        </div>
     );
}
 
export default Searchbar;