import DashboardMenuBar from '@/components/DashboardMenuBar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <DashboardMenuBar></DashboardMenuBar>
            <main>{children}</main>
        </div>
    );
};

export default DashboardLayout;<main></main>