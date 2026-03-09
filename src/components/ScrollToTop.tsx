import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Paksa browser buat scroll ke paling atas setiap pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini nggak ngerender apa-apa
};

export default ScrollToTop;