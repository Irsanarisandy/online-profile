import React from 'react';
import CustomNavbar from './custom-navbar';
import MainRoutes from './main-routes';

const MainLayout = () => (
    <div id="main-layout">
        <CustomNavbar />
        <MainRoutes />
        <footer>Irsan Arisandy &#64; {(new Date()).getFullYear()}</footer>
    </div>
);

export default MainLayout;
