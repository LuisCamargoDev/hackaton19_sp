import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container } from "./styled";

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
              description: "Aprenda como criar esse app que todo mundo utiliza"
            }
          ]
        };

        setCourses(response.data);
      } catch (err) {}
    }
  }, []);

  return <Container />;
}

export default MyCoursesPage;
