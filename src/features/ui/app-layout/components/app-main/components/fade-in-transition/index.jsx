import "./assets/css/fade-in-transition.css";

import { useEffect, useState, cloneElement } from "react";
import { useLocation } from "react-router-dom";

const FadeInTransition = ({ children }) => {
  const location = useLocation();

  const [transitionStage, setTransistionStage] = useState("fadeIn");
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {cloneElement(children, { location: displayLocation })}
    </div>
  );
};

export default FadeInTransition;
