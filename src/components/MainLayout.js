import React from 'react';
import '../styles/Layout.css';
import CustomNavbar from './CustomNavbar';
import MainRoutes from './MainRoutes';

const MainLayout = () => (
    <div id="main-layout">
        <CustomNavbar />
        <MainRoutes />
    </div>
);

export default MainLayout;
