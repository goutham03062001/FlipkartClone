
import './navbar.module.css'
import designs from './navbar.module.css'

function NavBar(props)
{
    return(
       <div className={designs.NavBar}>
            <input className={designs.input} placeholder="Search for products, brands and more" name="searchinput"/>
            <button className={designs.button} type="submit">Login</button>
    
            <div className={designs.list}>
                <ul className={designs.un_list}>
                    <li >Become a Seller</li>
                    <li >More</li>
                    <li >Cart</li>
                </ul>
            </div>

        </div>
    );
}

export default NavBar