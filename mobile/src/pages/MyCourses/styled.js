import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View``;

export const Courses = styled(FlatList)`
    margin-top: 20px;
`;

export const CourseItem = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #c1c1c1;
    width: 40%;
    margin: 0 10px;
`;

export const CourseName = styled.Text`
    margin-top: 5px;
    text-align: center;
`;

export const CourseDescription = styled.Text``;

export const CourseCapacity = styled.Text``;

export const CourseSchedule = styled.Text``;
