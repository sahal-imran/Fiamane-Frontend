import React, { useState } from "react";
import MyProfile from "components/app/Profile/MyProfile";
import MyProfile2 from "components/app/Profile/MyProfile2";
import CompanyInformation from "components/app/Profile/CompanyInformation";

function Profile() {
  const [Profile, Shuffle_To_Profile] = useState<boolean>(false);

  const ShowProfile = () => {
    Shuffle_To_Profile(true);
  };

  const [ProfileForm, SetProfileForm] = useState({
    fullName: "",
    emailAddress: "",
    telephoneNumber: "",
    whatsappNumber: "",
    compamyName: "",
    activitySuitsCompany: "",
    companyDescription: "",
    KbisNumber: "",
    drivingLicenseNumber: "",
    siteWeb: "",
    facebook: "",
    instagram: "",
    cin: "",
    companyPhotos: [],
  });

  const handleProfileForm = (event: any) => {
    const { name, value } = event.target;
    SetProfileForm({ ...ProfileForm, [name]: value });
  };


  return (
    <div className="w-full h-full flex flex-col p-4 md:p-8 bg-white-off">
      {Profile ? (
        <MyProfile2
          ProfileStates={ProfileForm}
          HandleProfileStates={handleProfileForm}
        />
      ) : (
        <>
          <MyProfile
            FormStates={ProfileForm}
            handleForm={handleProfileForm}
            ShowProfile={ShowProfile}
          />
          <CompanyInformation
            handleProfileForm={handleProfileForm}
            profileFormState={ProfileForm}
          />
        </>
      )}
    </div>
  );
}

export default Profile;
