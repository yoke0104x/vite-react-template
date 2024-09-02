/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-14 23:39:36
 */
import NotPage from '@/components/NotPage';
import React from 'react';
import { Navigate, useRoutes, } from 'react-router-dom';


const Layout = React.lazy(() => import('@/pages/Layout'));

const Home = React.lazy(() => import('@/pages/Home'));

const About = React.lazy(() => import('@/pages/About'));

const Blog = React.lazy(() => import('@/pages/Blog'));

const Contact = React.lazy(() => import('@/pages/Contact'));

const RobotViews = React.lazy(() => import('@/pages/RobotViews'));

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
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/robot/:code',
                    element: <RobotViews />
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