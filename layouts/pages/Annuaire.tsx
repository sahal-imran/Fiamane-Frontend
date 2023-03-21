import React, { useState, useEffect } from "react";
import Annuaire from "components/Annuaire/Annuaire";
import BannerHeader from "components/shared/Headers/BannerHeader";

function AnnuaireView() {

  return (
    <div className="w-full">
      <BannerHeader Title="Annuaire" />
      <Annuaire />
    </div>
  );
}

export default AnnuaireView;