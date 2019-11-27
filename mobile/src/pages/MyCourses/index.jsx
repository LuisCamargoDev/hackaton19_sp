import React, { useState, useEffect } from "react";
import { View, Text } from "react-native"

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
        const response = await api.get("teachcourse", {
          headers: {
            coachId: "5dde67efd4b6980017531e89"
          }
        });

        setCourses(response.data);
      } catch (err) {}
    }

    fetchCourses();
  }, []);

  return (
    <Container>
      {courses.map(school => (
        <View key={school._id} style={{ padding: 10 }}>
          <Text style={{ borderBottomColor: '#c1c1c1', borderBottomWidth: 1, paddingBottom: 5 }}>{school.name}</Text>
          <Courses
            numColumns={2}
            data={school.courses}
            keyExtractor={item => String(item._id)}
            renderItem={({ item }) => (
              <CourseItem>
                <CourseCapacity>{item.students.length}/{item.limitStudents}</CourseCapacity>
                <CourseName>{item.name}</CourseName>
              </CourseItem>
            )}
          />
        </View>
      ))}
    </Container>
  );
}

MyCoursesPage.navigationOptions = {
  title: "Meus Cursos"
}

export default MyCoursesPage;
