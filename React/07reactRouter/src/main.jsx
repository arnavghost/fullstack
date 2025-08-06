
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path: '/',   //called as the root
    element: <Layout />,//after putting the layout all of the other component renders 
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About /> 
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader,  //api calling 
      },
    ]
  }
]);

//other way to do it 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />//internal routing can be done 
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />
//       <Route path="github" element={<Github />} />
//     </Route>
//   )
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


export default router