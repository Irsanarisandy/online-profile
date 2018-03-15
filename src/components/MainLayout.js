import React from 'react';
import CustomNavbar from './CustomNavbar';
import MainRoutes from './MainRoutes';

export default (props) => (
    <div id="main-layout">
        <CustomNavbar />
        <MainRoutes />
        <footer>Irsan Arisandy &#169; {(new Date()).getFullYear()}</footer>
    </div>
);
