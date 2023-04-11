import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PageNotFound from './pages/page-not-found/page-not-found.component';
import Login from './pages/login/login.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Projects from './pages/projects/projects.component';
import ProjectDetails from './pages/projects/project-details/project-details.component';
import Users from './pages/users/users.component';
import AddUser from './pages/users/add-user/add-user.component';
import CreateNewProject from './pages/projects/create-new-project/create-new-project.component';
import CustomerSupport from './pages/customer-support/customer-support.component';
import MapView from './pages/map-view/map-view.component';
import Reports from './pages/reports/reports.component';


function AppRouter(props) {
    const navigate = useNavigate();

    useEffect(() => {
        let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (!!isLoggedIn && !isLoggedIn) {
            navigate('/login');
        };
    }, [navigate])

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create-new" element={<CreateNewProject />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/map-view" element={<MapView />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/page-no-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRouter;