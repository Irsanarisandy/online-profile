import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import '../styles/Layout.css';

const MainLayout = (props) => (
    <div>
        <CustomNavbar />
        {props.children}
    </div>
);

export default MainLayout;
