'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading'; // since it's not SSR, manually load it
import Courses from './components/Courses';
import CoursesSearch from './components/CoursesSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <h1>Welcome To Traversy Meida</h1>
      <CoursesSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};
export default HomePage;