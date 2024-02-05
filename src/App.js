import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import Header from "./components/Header";
import DetailedCourse from "./components/AllCourses/DetailedCourse";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllCourses" exact element={<AllCourses />} />
        <Route path="/AllCourses/CourseDetails" exact element={<DetailedCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
