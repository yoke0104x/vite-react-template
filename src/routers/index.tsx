import NotPage from '@/components/NotPage';
import React from 'react';
import { Navigate, useRoutes, } from 'react-router-dom';


const Layout = React.lazy(() => import('@/pages/Layout'));

const Home = React.lazy(() => import('@/pages/Home'));


const Events = React.lazy(() => import('@/pages/Events'));


const EventsNews = React.lazy(() => import('@/pages/Events/News'));


const EventsDetail = React.lazy(() => import('@/pages/Events/Detail'));


const Tasks = React.lazy(() => import('@/pages/Tasks'));


const TaskNews = React.lazy(() => import('@/pages/Tasks/News'));


const TaskDetail = React.lazy(() => import('@/pages/Tasks/Detail'));


const Responsible = React.lazy(() => import('@/pages/Responsible'));


const Participant = React.lazy(() => import('@/pages/Participant'));


const Profile = React.lazy(() => import('@/pages/Profile'));

const EditProfile = React.lazy(() => import('@/pages/Profile/Edit'));

const UserList = React.lazy(() => import('@/pages/UserList'));

function AppRoutes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/home" replace />
        },
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/events',
                    element: <Events />
                },
                {
                    path: '/events/news',
                    element: <EventsNews />
                },
                {
                    path: '/events/detail',
                    element: <EventsDetail />
                },
                {
                    path: '/responsible',
                    element: <Responsible />
                },
                {
                    path: '/participant',
                    element: <Participant />
                },
                {
                    path: '/tasks',
                    element: <Tasks />
                },
                {
                    path: '/tasks/news',
                    element: <TaskNews />
                },
                {
                    path: '/tasks/detail',
                    element: <TaskDetail />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/profile/edit',
                    element: <EditProfile />
                },
                {
                    path: '/userList',
                    element: <UserList />
                },
                {
                    path: "*",
                    element: <NotPage />
                }
            ]
        },
        {
            path: "*",
            element: <NotPage showBackButton={false} />
        }
    ]);

    return routes;
}

export default AppRoutes;