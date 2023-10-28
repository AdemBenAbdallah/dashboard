import { Link } from 'react-router-dom';
import './menu.scss';
import { menuItems } from '../../data';

interface MenuItem {
    to: string;
    isSelected: string;
    icon: JSX.Element;
    title: string;
}


const MenuItem = ({ to, isSelected, icon, title }: MenuItem) => (
    <Link to={to} className={`listItem ${isSelected === title && 'selected'}`}>
        {icon}
        <span className={`listItemTitle ${isSelected === title && 'selected'}`}>{title}</span>
    </Link>
);

const Menu = () => {




    return (
        <div className="menu">
            <h3>Super Delivery</h3>
            <div className="item">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
            <button className="profile-button">
                <img src='/profile.svg' alt='mon compte' />
                <span>Mon compte</span>
            </button>
            <button className="signout">
                Se déconnecter
            </button>
        </div>
    );
};

export default Menu;
