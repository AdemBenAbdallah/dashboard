import { Shop, Profile } from "iconsax-react";
import UserItem from "./UserItem";

const UsersPresentation = () => {
  return (
    <div className="box">
      <h4>Présentation des utilisateurs</h4>
      <div className="user-data">
        <UserItem icon={<Shop size="18" color="#F26129" variant="Bulk" />} title="Fournisseurs" count={9} />
        <UserItem icon={<Shop size="18" color="#F26129" variant="Bulk" />} title="Livreurs" count={15} />
        <UserItem icon={<Profile size="18" color="#F26129" variant="Bulk" />} title="Clients" count={7} />
      </div>
    </div>
  );
};

export default UsersPresentation;
