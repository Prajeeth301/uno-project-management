import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found/page-not-found.component';
import Login from './pages/login/login.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Projects from './pages/projects/projects.component';
import ProjectDetails from './pages/projects/project-details/project-details.component';
import Users from './pages/users/users.component';
import AddUser from './pages/users/add-user/add-user.component';
import CreateNewProject from './pages/projects/create-new-project/create-new-project.component';
import CustomerSupport from './pages/customer-support/customer-support.component';

function AppRouter(props) {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create-new" element={<CreateNewProject />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/page-no-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRouter;