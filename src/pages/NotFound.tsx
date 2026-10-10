import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page Not Found | Abdulrahman Emad</title>
        <meta name="description" content="This page could not be found. Return to Abdulrahman Emad's software quality assurance portfolio." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://abdoemad-portofolio.lovable.app${location.pathname}`} />
        <meta property="og:title" content="Page Not Found | Abdulrahman Emad" />
        <meta property="og:description" content="This page could not be found. Return to Abdulrahman Emad's software quality assurance portfolio." />
        <meta property="og:url" content={`https://abdoemad-portofolio.lovable.app${location.pathname}`} />
        <meta name="twitter:title" content="Page Not Found | Abdulrahman Emad" />
        <meta name="twitter:description" content="This page could not be found. Return to Abdulrahman Emad's software quality assurance portfolio." />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
