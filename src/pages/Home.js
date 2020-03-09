import React, { useState } from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/core";
import Semester from "../components/Semester";
import {
  subjectData,
  getSubjectList,
  getGPVByGrade,
  getCreditsBySubject
} from "../helpers";

const Home = () => {
  const [subjects, setSubjects] = useState(getSubjectList());
  const [totalCredits, setTotalCredits] = useState(0);

  const onGradeSelect = (subject, grade) => {
    const updated = {
      ...subjects,
      [subject.code]: !isNaN(getGPVByGrade(grade))
        ? subject.credits * getGPVByGrade(grade).toFixed(2)
        : "None"
    };

    const subjectCredits = {};

    Object.keys(updated).forEach(sub => {
      subjectCredits[sub] = 0;
    });

    for (const [key, value] of Object.entries(updated)) {
      if (value !== "None") {
        subjectCredits[key] = getCreditsBySubject(key);
      }
    }

    setTotalCredits(
      Object.values(subjectCredits).reduce((acc, current) => acc + current)
    );

    setSubjects(updated);
  };

  const sum = Object.values(subjects)
    .filter(val => val !== "None")
    .reduce((acc, current) => acc + current, 0);

  let gpa = 0;

  if (totalCredits > 0) {
    gpa = (sum / totalCredits).toFixed(2);
  }

  return (
    <Box w="100vw" position="relative" marginLeft="auto" marginRight="auto">
      <Box
        w="100%"
        height={20}
        bg="#805AD5"
        position="fixed"
        zIndex="100"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="30px" fontWeight="bold">
          {`GPA ${gpa}`}
        </Text>
      </Box>
      <SimpleGrid columns={1} spacing={10}>
        <Box
          width={[
            "90%", // base
            "80%", // 480px upwards
            "80%", // 768px upwards
            "50%" // 992px upwards
          ]}
          marginLeft="auto"
          marginRight="auto"
          paddingTop="100px"
        >
          <Box
            mt="2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {subjectData.map(item => (
              <Semester
                key={item.semester}
                title={item.semester}
                subjects={item.subjects}
                onGradeSelect={onGradeSelect}
              />
            ))}
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
