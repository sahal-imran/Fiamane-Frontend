import React, { useState } from "react";
import Handler from "components/FindCarrier/Handler";
import Offers from "components/FindCarrier/offre/offer";
import Depart from "components/FindCarrier/depart/depart";
import BannerHeader from "components/shared/Headers/BannerHeader";

function FindCarrier() {
  //  this stae will shuffle between offer and depart component
  const [IsOffer, setIsOffer] = useState<boolean>(true);

  return (
    <div className="w-full">
      <BannerHeader
        Title="Une solution de suivi de colis unique"
        Subtitle=" Simple, sécurisé et responsable"
      />
      <div className="w-full -translate-y-[60px] sm:-translate-y-[100px]">
        <Handler setState={setIsOffer} state={IsOffer} />
      </div>
      {IsOffer ? <Offers /> : <Depart />}
    </div>
  );
}

export default FindCarrier;
