import React, { useState, useEffect } from "react";

import api from "../../services/api";

import {
  Container,
  Courses,
  CourseItem,
  CourseName,
  CourseDescription,
  CourseCapacity,
  CourseSchedule
} from "./styled";

function MyCoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        // const response = await api.get("mycourses");
        const response = {
          data: [
            {
              id: 1,
              name: "Desenvolvendo o Facebook",
              description: "Aprenda como criar esse app que todo mundo utiliza",
              capacity: 10,
              schedule: "seg, qua, sex"
            }
          ]
        };

        setCourses(response.data);
      } catch (err) {}
    }

    fetchCourses();
  }, []);

  return (
    <Container>
      <Courses
        data={courses}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CourseItem>
            <CourseName>{item.name}</CourseName>
            <CourseDescription>{item.description}</CourseDescription>
            <CourseCapacity>{item.capacity}</CourseCapacity>
            <CourseSchedule>{item.schedule}</CourseSchedule>
          </CourseItem>
        )}
      />
    </Container>
  );
}

export default MyCoursesPage;
