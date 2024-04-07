import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AllCourses from "./components/Courses";
import Header from "./components/Header";
import CourseDetails from "./components/Courses/CourseDetails";
import MyCourses from "./components/Courses/MyCourses";
import MyCoursesDetails from "./components/Courses/MyCoursesDetails";
import About from "./components/About";
import Blog from "./components/Blog";
import FAQs from "./components/FAQs";
import Pricing from "./components/Pricing";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderLayout />,
      // errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/AllCourses",
          element: <AllCourses />,
        },
        {
          path: "/AllCourses/CourseDetails",
          element: <CourseDetails />,
        },
        {
          path: "/MyCourses",
          element: <MyCourses />,
        },
        {
          path: "/MyCourses/MyCoursesDetails",
          element: <MyCoursesDetails />,
        },
        {
          path: "/Pricing",
          element: <Pricing />,
        },
        {
          path: "/Blog",
          element: <Blog />,
        },
        {
          path: "/Blog/BlogDetails",
          element: <BlogDetails />,
        },
        {
          path: "/Faq's",
          element: <FAQs />,
        },
        {
          path: "/ContactUs",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
