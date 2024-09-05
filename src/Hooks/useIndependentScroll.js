import { useEffect, useRef } from "react";

const useIndependentScroll = () => {
  const sidebarRef = useRef(null);
  const mainBodyRef = useRef(null);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const enableScroll = (ref) => {
      ref.current.addEventListener("wheel", preventScroll, { passive: false });
    };

    const disableScroll = (ref) => {
      ref.current.removeEventListener("wheel", preventScroll);
    };

    const handleMouseEnterSidebar = () => {
      disableScroll(mainBodyRef);
      enableScroll(sidebarRef);
    };

    const handleMouseEnterMainBody = () => {
      disableScroll(sidebarRef);
      enableScroll(mainBodyRef);
    };

    sidebarRef.current.addEventListener("mouseenter", handleMouseEnterSidebar);
    mainBodyRef.current.addEventListener("mouseenter", handleMouseEnterMainBody);

    return () => {
      sidebarRef.current.removeEventListener("mouseenter", handleMouseEnterSidebar);
      mainBodyRef.current.removeEventListener("mouseenter", handleMouseEnterMainBody);
      disableScroll(sidebarRef);
      disableScroll(mainBodyRef);
    };
  }, []);

  return { sidebarRef, mainBodyRef };
};

export default useIndependentScroll;