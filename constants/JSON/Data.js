const Data = {
  TopNavigation: {
    NavItems: [
      {
        Name: "Navbar.Links.FindTransporter", //Find a carrier
        Route: "/",
      },
      {
        Name: "Navbar.Links.Yearly", //Phone book
        Route: "/annuaire",
      },
      {
        Name: "Navbar.Links.TrackAnItem", //Track a package
        Route: "",
      },
      {
        Name: "Navbar.Links.FiamaneCompany", //Fiamane company
        Route: "",
      },
    ],
  },
  LeftNavigation: {
    NavItems: [
      {
        Name: "AppSideBar.MyOffers",
        Route: "/offer",
      },
      {
        Name: "AppSideBar.MyDeparatures",
        Route: "/departure",
      },
      {
        Name: "AppSideBar.MyQuotations",
        Route: "/my-quote",
      },
      {
        Name: "AppSideBar.MyProfile",
        Route: "/profile",
      },
      {
        Name: "AppSideBar.MyBookmars",
        Route: "/favorite",
      },
      {
        Name: "AppSideBar.Settings",
        Route: "/settings",
      },
    ],
  },
  FindCarrier: {
    OfferData: [
      {
        id: "1",
        SenderName: "Youssouf Serhane",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Bagages",
        Image: "/Assets/Bags.png",
        Address: "De Madrid à Tanger",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
      },
      {
        id: "2",
        SenderName: "Malik B",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Carton",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
        Image: "/Assets/Carton.png",
        Address: "De Madrid à Tanger",
      },
      {
        id: "3",
        SenderName: "Malik C",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Bagages",
        Image: "/Assets/Nopicture.png",
        Address: "De Madrid à Tanger",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
      },
      {
        id: "4",
        SenderName: "Malik D",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Bagages",
        Image: "/Assets/Bags.png",
        Address: "De Madrid à Tanger",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
      },
      {
        id: "5",
        SenderName: "Malik E",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Carton",
        Image: "/Assets/Carton.png",
        Address: "De Madrid à Tanger",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
      },
      {
        id: "6",
        SenderName: "Malik F",
        SenderPic: "/Assets/OfferDetails.png",
        SenderPlace: "Madrid",
        ReciverPlace: "Tanger",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.",
        Weight: "5kg",
        Dimension: "20 x 20 x 80 cm",
        Title: "Bagages",
        Image: "/Assets/Nopicture.png",
        Address: "De Madrid à Tanger",
        Date: "Date prévue d’envoi vendredi, 09 Dec",
      },
    ],
    Departs: [
      {
        Id: "1",
        Rating: 4,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: true,
        CompanyName: "Agence Prans Trans",
        CompanyImage: "/Assets/Prans.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Direct",
      },
      {
        Id: "2",
        Rating: 5,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: true,
        CompanyName: "Agence MTT Trans",
        CompanyImage: "/Assets/MTT.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Direct",
      },
      {
        Id: "3",
        Rating: 3,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: true,
        CompanyImage: "/Assets/Boumara.png",
        CompanyName: "Agence BOUMARA Trans",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
      {
        Id: "4",
        Rating: 4,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: true,
        CompanyImage: "/Assets/Boumara.png",
        CompanyName: "Agence Prans Trans",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
      {
        Id: "5",
        Rating: 5,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: true,
        CompanyImage: "/Assets/Prans.png",
        CompanyName: "Agence Prans Trans",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
      {
        Id: "6",
        IsVerified: false,
        Rating: 4,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        CompanyImage: "/Assets/MTT.png",
        CompanyName: "Agence MTT Trans",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Direct",
      },
      {
        Id: "7",
        Rating: 5,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        IsVerified: false,
        CompanyName: "Agence BOUMARA Trans",
        CompanyImage: "/Assets/Boumara.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Direct",
      },
      {
        Id: "8",
        Rating: 3,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        CompanyName: "Agence BOUMARA Trans",
        IsVerified: false,
        CompanyImage: "/Assets/Boumara.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
      {
        Id: "9",
        Rating: 5,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        CompanyName: "Agence BOUMARA Trans",
        IsVerified: false,
        CompanyImage: "/Assets/Boumara.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
      {
        Id: "10",
        Rating: 5,
        Phone: "+212 530 800 800",
        Address: "Avenue Hassan II, Imm II, Oujda centre",
        CompanyName: "Agence BOUMARA Trans",
        IsVerified: false,
        CompanyImage: "/Assets/Boumara.png",
        SendingPlace: "Paris, France",
        SendingDate: "Dimanche 30 octobre",
        RecievingDate: "Mardi 1 novembre",
        RecievingPlace: "Agadir, Marroc",
        SendingMode: "Avec escale",
      },
    ],
  },

  stopOver: {
    stopOverData: [
      {
        title: "Madrid",
        deliveryPoint: [
          {
            title: "Point de ramassage / livraison",
          },
          {
            date: "10h-11h30",
          },
          {
            address: "Barrio de La Latin",
          },
        ],
      },
      {
        id: "two",
        title: "Tanger",
        AgencyDeposite: [
          {
            title: "Dépot / retrait agence",
          },
          {
            date: "Mardi, 17 Nov",
          },
          {
            address: "Plaza Toro",
          },
        ],
        deliveryPoint: [
          {
            title: "Point de ramassage / livraison",
          },
          {
            date: "10h-11h30",
          },
          {
            address: "Barrio de La Latin",
          },
        ],
        homePickUp: [
          {
            title: "Ramassage / livraison à domicile possible",
          },
          {
            date: "",
          },
          {
            address: "",
          },
        ],
      },
      {
        id: "three",
        title: "Asilah",
        AgencyDeposite: [
          {
            title: "Dépot / retrait agence",
          },
          {
            date: "Mardi, 17 Nov",
          },
          {
            address: "Plaza Toro",
          },
        ],
        deliveryPoint: [
          {
            title: "Point de ramassage / livraison",
          },
          {
            date: "10h-11h30",
          },
          {
            address: "Barrio de La Latin",
          },
        ],
        homePickUp: [
          {
            title: "Ramassage / livraison à domicile possible",
          },
          {
            date: "",
          },
          {
            address: "",
          },
        ],
      },
      {
        title: "Rabat",
        deliveryPoint: [
          {
            title: "Point de ramassage / livraison",
          },
          {
            date: "10h-11h30",
          },
          {
            address: "Barrio de La Latin",
          },
        ],
        AgencyDeposite: [
          {
            title: "Dépot. / livraison à domicile possible",
          },
          {
            date: "",
          },
          {
            address: "",
          },
        ],
      },
    ],
  },
  LegalInformation: [
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
  Annuaire: {
    Agences: [
      {
        id: "1",
        IsVerified: true,
        CompanyImage: "/Assets/Prans.png",
        CompanyName: "P Trans Logistics",
        Rating: 4,
        Reviews: "64",
        Address: "Zone Industrielle Parcelles A53  BP 23",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 4,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 5,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "2",
        IsVerified: true,
        CompanyImage: "/Assets/MTT.png",
        CompanyName: "Maghreb Tourisme & Transport ",
        Rating: 4,
        Reviews: "44",
        Address: "Lotissement Boumara, 520, Oujda, Maroc",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "3",
        IsVerified: false,
        CompanyImage: "/Assets/Boumara.png",
        CompanyName: "Agence BOUMARA Trans",
        Rating: 4,
        Reviews: "74",
        Address: "Rte De Marrakech Km 12 Z.I.  Rabat,Morocco",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "4",
        IsVerified: false,
        CompanyImage: "/Assets/Guadix.png",
        CompanyName: "Guadix Log ",
        Rating: 4,
        Reviews: "64",
        Address: "194 Boulevard Aba Chouaib Doukkali",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "5",
        IsVerified: true,
        CompanyImage: "/Assets/Boumara.png",
        CompanyName: "Agence BOUMARA Trans ",
        Rating: 4,
        Reviews: "44",
        Address: "Lotissement Boumara, 520, Oujda, Maroc",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "6",
        IsVerified: true,
        CompanyImage: "/Assets/Guadix.png",
        CompanyName: "Guadix Log",
        Rating: 4,
        Reviews: "87",
        Address: "194 Boulevard Aba Chouaib Doukkali",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "7",
        IsVerified: false,
        CompanyImage: "/Assets/Prans.png",
        CompanyName: "P Trans Logistics",
        Rating: 4,
        Reviews: "54",
        Address: "Zone Industrielle Parcelles A53 Ait Melloul BP 23",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 4,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 5,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "8",
        IsVerified: false,
        CompanyImage: "/Assets/MTT.png",
        CompanyName: "Maghreb Tourisme & Transport ",
        Rating: 4,
        Reviews: "44",
        Address: "Lotissement Boumara, 520, Oujda, Maroc",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "9",
        IsVerified: false,
        CompanyImage: "/Assets/Prans.png",
        CompanyName: "P Trans Logistics",
        Rating: 4,
        Reviews: "64",
        Address: "Zone Industrielle Parcelles A53  BP 23",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 4,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 5,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
      {
        id: "10",
        IsVerified: true,
        CompanyImage: "/Assets/Boumara.png",
        CompanyName: "Agence BOUMARA Trans ",
        Rating: 4,
        Reviews: "44",
        Address: "Lotissement Boumara, 520, Oujda, Maroc",
        CompanyMessege:
          "Urna, purus ac eleifend quisque magna. Odio fermentum, suspendisse cursus rhoncus. Metus parturient fringilla viverra proin.... Lire plus",
        Phone: "+212 530 800 800",
        Gallery: [
          "/Assets/Annuaire/Gallery1.png",
          "/Assets/Annuaire/Gallery2.png",
          "/Assets/Annuaire/Gallery3.png",
          "/Assets/Annuaire/Gallery4.png",
        ],
        Clients: [
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/girl.png",
            Address: "LA, California",
            Rating: 5,
            Date: "28/03/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
          {
            Name: "LoremIpsum",
            Picture: "/Assets/Annuaire/boy.png",
            Address: "Oujda centre, Oujda",
            Rating: 4,
            Date: "20/05/2022",
            Review:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla aliquam aliquet pellentesque ridiculus. At molestie augue ullamcorper convallis a cursus sed dolor tempus. Massa neque commodo tellus adipiscing. Sit gravida elementum  At turpis mauris sit venenatis ut enim fames. Bibendum nunc mauris donec amet eget senectus purus maecenas sed. Tellus placerat ac arcu sit eget posuere. Eleifend justo est eros, integer neque, dis morbi tincidunt. Vitae nec egestas consectetur varius bibendum quis.",
          },
        ],
      },
    ],
  },
  MyQuotesData: {
    reciptsData: [
      {
        img: "/Assets/Bags.png",
        title: "Bagages",
        location: "De Madrid à Tanger",
        date: "Date prévue d’envoi vendredi, 09 Dec",
        devis: "2",
        messages: "0",
        accepts: "0",
        subProducts: [
          {
            img: "/Assets/MTT.png",
            title: "Maghreb Tourisme & Transport",
            rating: "3",
            price: "100 €",
            message: "Urna, purus ac eleifend quisque magna.",
          },
          {
            img: "/Assets/Prans.png",
            title: "P Trans Logistics",
            rating: "5",
            price: "150 €",
            message: "Urna, purus ac eleifend quisque magna.",
          },
          {
            img: "/Assets/Prans.png",
            title: "P Trans Logistics",
            rating: "5",
            price: "150 €",
            message: "Urna, purus ac eleifend quisque magna.",
          },
        ],
      },
      {
        img: "/Assets/Bags.png",
        title: "Bagages",
        location: "De Madrid à Tanger",
        date: "Date prévue d’envoi vendredi, 09 Dec",
        devis: "2",
        messages: "0",
        accepts: "0",
        subProducts: [],
      },
    ],
  },
};
export default Data;
