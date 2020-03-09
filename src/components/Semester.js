import React from "react";
import PropTypes from "prop-types";
import { Heading, Text, Box, Select, Flex, Tag, TagLabel } from "@chakra-ui/core";

const Semester = ({ title, subjects, onGradeSelect }) => {
  return (
    <Box width="100%" marginBottom="3">
      <Heading as="h4" size="md" marginBottom="3">{title}</Heading>
      {subjects.map(subject => (
        <Flex key={subject.label} width="100%" direction="row" alignItems="center" justifyContent="space-between" marginBottom="1">
        <Flex direction="row" alignItems="center">
          <Text>{`${subject.code} - ${subject.label}`}</Text>
          <Tag marginLeft="1" marginRight="2" size="sm" variantColor="purple" rounded="full">
            <TagLabel>{subject.credits}</TagLabel>
          </Tag>
        </Flex>
        <Select defaultValue="None" minWidth="20%" maxWidth="25%" id="center" onChange={e => onGradeSelect(subject, e.target.value)}>
          <option value="None">None</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="I">I</option>
          <option value="F">F</option>
        </Select>
      </Flex>
      ))}
    </Box>
  );
};

Semester.propTypes = {
  title: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      credits: PropTypes.number.isRequired
    }).isRequired
  ),
  onGradeSelect: PropTypes.func.isRequired,
};

export default Semester;
