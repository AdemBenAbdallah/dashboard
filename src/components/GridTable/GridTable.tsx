import ButtonStatus from './ButtonStatus';
import './gridtable.scss'

const GridTable = () => {
    const data = [
        {
            id: "01202",
            Fournisseur: 'Supplier 1',
            Client: {
                img: './Ellipse.svg',
                name: 'Client 1',
            },
            'Date de création': '2023/10/01-12:30',
            Livreur: {
                img: './EllipseLiveur.svg',
                name: 'Livreur 1',
            },
            Statut: 'Compléter',
            color: "#2F8132",
            backgroundColor: "#e3f9e5"
        },
        {
            id: "01255",
            Fournisseur: 'Supplier 1',
            Client: {
                img: './Ellipse.svg',
                name: 'Client 1',
            },
            'Date de création': '2023/10/01-12:30',
            Livreur: {
                img: './EllipseLiveur.svg',
                name: 'Livreur 1',
            },
            Statut: 'Compléter',
            color: "#A61B1B",
            backgroundColor: "#f29b9b"
        },
        {
            id: "01252",
            Fournisseur: 'Supplier 1',
            Client: {
                img: './Ellipse.svg',
                name: 'Client 1',
            },
            'Date de création': '2023/10/01-12:30',
            Livreur: {
                img: './EllipseLiveur.svg',
                name: 'Livreur 1',
            },
            Statut: 'Compléter',
            color: "#C99A2E",
            backgroundColor: "#fffaeb"
        },
        {
            id: "01251",
            Fournisseur: 'Supplier 1',
            Client: {
                img: './Ellipse.svg',
                name: 'Client 1',
            },
            'Date de création': '2023/10/01-12:30',
            Livreur: {
                img: './EllipseLiveur.svg',
                name: 'Livreur 1',
            },
            Statut: 'Compléter',
            color: "#4055A8",
            backgroundColor: "#e0e8f9"
        },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fournisseur</th>
                    <th>Client</th>
                    <th>Date de création</th>
                    <th>Livreur</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td className='id'>{row.id}</td>
                        <td className='fournisseur'>{row.Fournisseur}</td>
                        <td className='details'>
                            <img src={row.Client.img} alt="Client" />
                            <span>{row.Client.name}</span>
                        </td>
                        <td className='date'>{row['Date de création']}</td>
                        <td className='details'>
                            <img src={row.Livreur.img} alt="Livreur" />
                            <span>{row.Livreur.name}</span>
                        </td>
                        <td>
                            <ButtonStatus color={row.color} text={row.Statut} backgroundColor={row.backgroundColor} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GridTable;
