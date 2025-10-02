import "./styles.css";
import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document
      .querySelector(".output")
      ?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <Outlet />;
}
