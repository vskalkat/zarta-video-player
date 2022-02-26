
import './navbar.css'
import searchLogo from '../../assets/search.svg'
import Icon from '../Icon';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <h3 className="logoContainer">
                ClapClap
            </h3>
            <div className="searchBar">
                <Icon srcPath={searchLogo} style={{paddingTop: '4px'}} />
                <input type="text" placeholder="Find creators and videos">
                </input>
            </div>
            <h5 className="howItWorks">
                How it works
            </h5>
        </div>
    )
}

export default Navbar;