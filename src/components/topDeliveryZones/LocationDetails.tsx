import { Location } from "iconsax-react";
import React from "react";

interface LocationDetailsProps {
  number: string;
  name: string;
  ordersCount: number;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({ number, name, ordersCount }) => {
  return (
    <div className="location-details">
      <div className="location-box">
        <Location size="20" color="#FF8A65" variant="Bulk" />
        <span>{`${number}. ${name}`}</span>
      </div>
      <span>{`x${ordersCount} commandes`}</span>
    </div>
  );
};

export default LocationDetails;
