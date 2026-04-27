import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaseUp from './BaseUp.jsx'
import BaseCenter from './BaseCenter.jsx'
import About from './About.jsx'
import Wiki from './Wiki.jsx'
import Login from './Login.jsx'

import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <BaseCenter />
      <TanStackRouterDevtools />
    </>
  ),
})

const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline/time',
  component: function Index() {
    return (
      <>
        <BaseUp />
      </>
    )
  },
})
const AboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline/about',
  component: function Index() {
    return (
      <>
        <About />
      </>
    )
  },
})
const WikiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline/wiki',
  component: function Index() {
    return (
      <>
        <Wiki />
      </>
    )
  },
})
const LoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline/login',
  component: function Index() {
    return (
      <>
        <Login />
      </>
    )
  },
})
const routeTree = rootRoute.addChildren([timelineRoute,AboutRoute,WikiRoute,LoginRoute])
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultNotFoundComponent: () =>{
    return(
      <></>
    )
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
    </>
  </StrictMode>,
)
