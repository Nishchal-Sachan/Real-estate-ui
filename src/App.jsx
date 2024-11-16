import HomePage from "./routes/homepage/homePage"
import ListPage from "./routes/listpage/listpage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage";
import AboutPage from "./routes/aboutPage/aboutPage";
import ContactPage from "./routes/contactPage/contactPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profileUpdate",
          element: <ProfileUpdatePage />
        },
        {
          path: "/new",
          element: <NewPostPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App