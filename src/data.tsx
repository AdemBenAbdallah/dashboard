import { Box, Element4, Flag, Graph, Profile, ReceiptDisscount, Shop } from "iconsax-react";

export interface DataItem {
    name: string;
    uv: number;
    pv: number;
}
interface DataPie {
    name: string;
    value: number;
    color: string;
}

const isSelected = 'Tableau de bord';

export const menuItems = [
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

export const options: { [key: string]: DataItem[] } = {
    last7days: [
        {
            name: '23/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '24/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '25/03',
            uv: 200,
            pv: 0,
        },
        {
            name: '26/03',
            uv: 250,
            pv: 100,
        },
        {
            name: '27/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '28/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '29/03',
            uv: 200,
            pv: 200,
        },
    ],
    '04/2023': [
        {
            name: '23/03',
            uv: 100,
            pv: 80,
        },
        {
            name: '24/03',
            uv: 100,
            pv: 70,
        },
        {
            name: '25/03',
            uv: 200,
            pv: 100,
        },
        {
            name: '26/03',
            uv: 200,
            pv: 100,
        },
        {
            name: '27/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '28/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '29/03',
            uv: 200,
            pv: 200,
        },
    ],
    '05/2023': [
        {
            name: '23/03',
            uv: 150,
            pv: 200,
        },
        {
            name: '24/03',
            uv: 120,
            pv: 100,
        },
        {
            name: '25/03',
            uv: 200,
            pv: 100,
        },
        {
            name: '26/03',
            uv: 250,
            pv: 100,
        },
        {
            name: '27/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '28/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '29/03',
            uv: 200,
            pv: 200,
        },
    ],
};


export const dataByMonthYear: { [key: string]: DataPie[] } = {
    '03/2023': [
        { name: "Annuler", value: 12, color: "#FCDFD4" },
        { name: "Compléter", value: 164, color: "#C24E21" },
        { name: "En attente", value: 30, color: "#F69069" },
    ],
    '04/2023': [
        { name: "Annuler", value: 70, color: "#FCDFD4" },
        { name: "Compléter", value: 70, color: "#C24E21" },
        { name: "En attente", value: 60, color: "#F69069" },
    ],
    '05/2023': [
        { name: "Annuler", value: 20, color: "#FCDFD4" },
        { name: "Compléter", value: 100, color: "#C24E21" },
        { name: "En attente", value: 80, color: "#F69069" },
    ],
};