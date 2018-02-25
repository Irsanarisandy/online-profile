import React from 'react';
import '../styles/layout.css';
import CustomNavbar from './custom-navbar';
import MainRoutes from './main-routes';

const MainLayout = () => (
    <div id="main-layout">
        <CustomNavbar />
        <MainRoutes />
    </div>
);

export default MainLayout;
