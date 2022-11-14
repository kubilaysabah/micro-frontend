import React from "react";
const Header = React.lazy(() => import('team1/Header'));
const Footer = React.lazy(() => import('team1/Footer'));
const Slider = React.lazy(() => import('team2/Slider'));

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>

      <React.Suspense fallback="Loading Slider">
        <Slider />
      </React.Suspense>

      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </>
  );
};

export default App;
