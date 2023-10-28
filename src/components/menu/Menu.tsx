import { Link } from 'react-router-dom';
import './menu.scss';
import {
    Box,
    Element4,
    Flag,
    Graph,
    Profile,
    ReceiptDisscount,
    Shop,
} from 'iconsax-react';

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
    const isSelected = 'Tableau de bord';

    const menuItems = [
        {
            to: '/',
            isSelected,
            icon: <Graph size="18" color={isSelected === 'Tableau de bord' ? '#F26129' : '#9AA5B1'} variant="Bulk" />,
            title: 'Tableau de bord',
        },
        {
            to: '/',
            isSelected,
            icon: <Element4 size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Catégories',
        },
        {
            to: '/',
            isSelected,
            icon: <Shop size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Fournisseurs',
        },
        {
            to: '/',
            isSelected,
            icon: <Element4 size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Livreurs',
        },
        {
            to: '/',
            isSelected,
            icon: <Profile size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Clients',
        },

        {
            to: '/',
            isSelected,
            icon: <Box size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Commandes',
        },
        {
            to: '/',
            isSelected,
            icon: <Flag size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Advertissement',
        },
        {
            to: '/',
            isSelected,
            icon: <ReceiptDisscount size="18" color="#9AA5B1" variant="Bulk" />,
            title: 'Coupons & Promos',
        },
    ];

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
