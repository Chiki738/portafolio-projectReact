import { useState, useEffect } from "react";

function useHeaderVisibility() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    const startHideTimer = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      const timeout = setTimeout(() => {
        setHeaderVisible(false);
      }, 5000);
      setHideTimeout(timeout);
    };

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHeaderVisible(true);
        startHideTimer();
      } else {
        setHeaderVisible(false);
        startHideTimer();
      }
    };

    const handleClick = () => {
      setHeaderVisible(true);
      startHideTimer();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return isHeaderVisible;
}

export default useHeaderVisibility;
