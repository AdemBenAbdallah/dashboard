import LocationDetails from "./LocationDetails";

const TopDeliveryZones = () => {
  return (
    <div className="box">
      <h4>Top 5 zones de livraison</h4>
      <div className="shop-location">
        <LocationDetails number="1" name="Mahdia" ordersCount={111} />
        <LocationDetails number="2" name="Essouassi" ordersCount={50} />
        <LocationDetails number="3" name="Ouled Chamekh" ordersCount={44} />
        <LocationDetails number="4" name="El Jem" ordersCount={32} />
        <LocationDetails number="5" name="Chebba" ordersCount={20} />
      </div>
    </div>
  );
};

export default TopDeliveryZones;
