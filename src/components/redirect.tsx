// src/pages/RedirectPage.tsx
import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Force redirect from iframe to full page
      window.top?.location.replace("/biodata");
    }
  }, []);

  return <p>Redirecting to your page...</p>;
};

export default RedirectPage;