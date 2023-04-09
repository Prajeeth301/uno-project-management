import { useEffect, useState } from 'react';
import './App.css';
import Footer from './layout/footer/footer.component';
import Header from './layout/header/header.component';
import Main from './layout/main/main.component';
import SideBar from './layout/side-bar/side-bar.component';
import { useLocation } from 'react-router-dom';
import { excludedRoutes } from './config/excluded-routes';


function App() {
  const { pathname } = useLocation();
  const [shouldHideLayout, setShouldHideLayout] = useState(false);

  useEffect(() => {
    setShouldHideLayout(excludedRoutes.includes(pathname))
  }, [pathname]);

  return (
    <div className="wrapper">
      {shouldHideLayout ? null : <Header />}
      {shouldHideLayout ? null : <SideBar />}
      <Main shouldHideLayout={shouldHideLayout} />
      {shouldHideLayout ? null : <Footer />}
    </div>
  );
}

export default App;
