import React from "react";

interface UserItemProps {
  icon: JSX.Element;
  title: string;
  count: number;
}

const UserItem: React.FC<UserItemProps> = ({ icon, title, count }) => {
  return (
    <div className="user-item">
      <div className="user-item-details">
        {icon}
        <span>{title}</span>
      </div>
      <span>{count}</span>
    </div>
  );
};

export default UserItem;
