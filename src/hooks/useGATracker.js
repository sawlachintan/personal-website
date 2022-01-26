import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const useGATracker = () => {
  const location = useLocation();
  const [isInit, setIsInit] = useState(false);
  const trackingId = "G-R2VYZJ4L1E";
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(trackingId);
      setIsInit(true);
    }
  }, []);

  useEffect(() => {
    if (isInit) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [isInit, location]);
};
