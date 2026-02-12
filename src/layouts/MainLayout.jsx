import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
