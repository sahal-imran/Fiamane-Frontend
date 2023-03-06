import React from "react";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "components/shared/Buttons/moreButton";
import ConfirmationPopUp from "components/shared/PopUps/Confirmation";
interface Props {
  Title?: string;
  Dimensions?: string;
  Weight?: string;
}

const StopOverSnippets = ({ Title, Dimensions, Weight }: Props) => {
  const [ConfirmEdit, SetConfirmation] = React.useState<boolean>(false)
  return (
    <React.Fragment>
      <div className="flex flex-col gap-1 justify-center items-start p-4">
        {/* => Title */}
        <div className="w-full flex justify-between items-center mb-3">
          <p>{Title}</p>
          <MoreButton CopyEvent={() => { }} DeleteEvent={() => { }} EditEvent={() => {
            SetConfirmation(true);
          }} />
        </div>
        {/* =====> Dimensions */}
        <div className="w-full flex justify-between items-center">
          <p className="text-[12px] font-sans font-normal leading-[20px]">
            Dimensions approximative
          </p>
          <p className="text-[12px] font-sans font-normal leading-[20px]">
            {Dimensions}
          </p>
        </div>
        {/* ======> Weight */}
        <div className="w-full flex justify-between items-center">
          <p className="text-[12px] font-sans font-normal leading-[20px]">
            Adresse
          </p>
          <p className="text-[12px] font-sans font-normal leading-[20px]">
            {Weight}
          </p>
        </div>
      </div>
      <ConfirmationPopUp Text="Si vous modifiez les informations sur cette case, elles vont changer automatiquement sur toutes les marchandises. Êtes-vous sûre de vouloir continuer?" IsOpen={ConfirmEdit} CancelEvent={() => SetConfirmation(false)} ConfirmedEvent={() => SetConfirmation(false)} />
    </React.Fragment>
  );
};

export default StopOverSnippets;
