// const { aboutPageLoaded, setAboutPageLoaded } =
// useContext(LoadOnebyOneContext);
//   const loadingInfoPage = useCallback((props) => {
//     if (props === true) {
//       setAboutPageLoaded(true);

import { useCallback, useState } from "react";

const useLoad = () => {
  const [didPageLoad, setDidPageLoad] = useState(false);
  const loadingPage = useCallback((bool) => {
    if (bool) {
      setDidPageLoad(true);
    }
  }, []);

  return {
    didPageLoad,
    loadingPage,
  };
};
export default useLoad;
