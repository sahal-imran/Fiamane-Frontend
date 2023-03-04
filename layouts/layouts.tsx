import React, { ReactNode } from "react";
import TopNavigation from "components/shared/Navigations/TopNavigation";
import LeftNavigation from "components/shared/Navigations/LeftNavigation";
import Footer from "components/shared/Footer/Footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <TopNavigation />
      <div className="w-full md:min-h-[calc(100vh-100px)] md:grid md:grid-cols-[283px_calc(100%-283px)]" >
        <div className="w-full h-full md:block hidden" >
          <LeftNavigation />
        </div>
        <div className="w-full h-full" >
          <main className='w-full h-full'>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}
