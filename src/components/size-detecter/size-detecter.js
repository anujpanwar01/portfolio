import { useState, useEffect } from "react";

export const getWindowDimension = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    height,
    width,
  };
};

const useWindowDimensions = () => {
  const [windowDimension, setWindowDimenson] = useState(getWindowDimension());

  useEffect(() => {
    const handleResize = function () {
      setWindowDimenson(getWindowDimension());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimension;
};

export default useWindowDimensions;
