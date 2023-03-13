import React, { ReactNode } from "react";
import TopNavigation from "components/shared/Navigations/TopNavigation";
import LeftNavigation from "components/shared/Navigations/LeftNavigation";
import Footer from "components/shared/Footer/Footer";
import { useRouter } from "next/router";
import BannerHeader from "components/shared/Headers/BannerHeader";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const Router = useRouter();

  const IsDashboard = () => {
    if (
      Router.pathname === "/offer" ||
      Router.pathname === "/profile" ||
      Router.pathname === "/departure" ||
      Router.pathname === "/settings" ||
      Router.pathname === "/favorite" ||
      Router.pathname === "/quotation"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <React.Fragment>
      <TopNavigation />
      <div
        className={`w-full md:min-h-[calc(100vh-100px)] ${IsDashboard() && "md:grid md:grid-cols-[283px_calc(100%-283px)]"
          } `}
      >
        {IsDashboard() && (
          <div className="w-full h-full md:block hidden">
            <LeftNavigation />
          </div>
        )}
        <div className="w-full h-full">
          <main className="w-full h-full">{children}</main>
        </div>
      </div>
      {!IsDashboard() && <Footer />}
    </React.Fragment>
  );
}