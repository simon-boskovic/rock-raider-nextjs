import { Fragment } from "react";
import Footer from "@components/layout/footer";
import MainNavigation from "@components/layout/main-navigation";

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <div style={{ height: "calc(100% - 66px)", overflow: "auto" }}>
        <main style={{ overflowX: "hidden" }}>{props.children}</main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
