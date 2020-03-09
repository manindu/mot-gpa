export const subjectData = [
  {
    semester: "Semester 1",
    subjects: [
      {
        label: "Organizational Behaviour and Management",
        code: 'MN5201',
        credits: 3
      },
      {
        label: "Skills for Business Management",
        code: 'MN5224',
        credits: 3
      },
      {
        label: "Management Decision Making",
        code: 'MN5225',
        credits: 3
      },
      {
        label: "Managing Technology for Competitiveness",
        code: 'MN5226',
        credits: 3
      }
    ]
  },
  {
    semester: "Semester 2",
    subjects: [
      {
        label: "Marketing Management",
        code: 'MN5206',
        credits: 3
      },
      {
        label: "Operations Management",
        code: 'MN5210',
        credits: 3
      },
      {
        label: "Management of Innovation and R&D",
        code: 'MN5212',
        credits: 3
      },
      {
        label: "Business Economics",
        code: 'MN5227',
        credits: 3
      }
    ]
  },
  {
    semester: "Semester 3",
    subjects: [
      {
        label: "Accounting and Financial Management",
        code: 'MN5207',
        credits: 3
      },
      {
        label: "Strategic Management",
        code: 'MN5208',
        credits: 3
      },
      {
        label: "Human Resource Management",
        code: 'MN5214',
        credits: 3
      },
      {
        label: "Technology Transfer",
        code: 'MN5228',
        credits: 3
      }
    ]
  },
  {
    semester: "Semester 4",
    subjects: [
      {
        label: "Skills for Research Project",
        code: 'MN6201',
        credits: 2
      },
      {
        label: "Social Shaping of Technology",
        code: 'MN5213',
        credits: 3
      },
      {
        label: "Supply Chain Management",
        code: 'MN5215',
        credits: 3
      },
      {
        label: "IT and E-Business",
        code: 'MN5216',
        credits: 3
      },
      {
        label: "Project Management",
        code: 'MN5219',
        credits: 3
      },
      {
        label: "Business and Commercial Law",
        code: 'MN5231',
        credits: 3
      },
      {
        label: "Business Process Management",
        code: 'MN5232',
        credits: 3
      },
      {
        label: "Entrepreneurship and Venture Creation",
        code: 'MN5233',
        credits: 3
      }
    ]
  },
  {
    semester: "Semester 5",
    subjects: [
      {
        label: "Research Project Phase I",
        code: 'MN6102',
        credits: 10
      }
    ]
  },
  {
    semester: "Semester 6",
    subjects: [
      {
        label: "Research Project Phase II",
        code: 'MN6202',
        credits: 10
      }
    ]
  }
];

export const getSubjectList = () => {
  const subjectList = {};
  for (const semester of subjectData) {
    semester.subjects.forEach(subject => {
      subjectList[subject.code] = 'None';
    });
  }

  return subjectList;
}

export const getGPVByGrade = grade => {
  switch(grade) {
    case 'A+':
      return 4.2;
    case 'A':
      return 4.0;
    case 'A-':
      return 3.7;
    case 'B+':
      return 3.3;
    case 'B':
      return 3.0;
    case 'B-':
      return 2.7;
    case 'C+':
      return 2.3;
    case 'I':
    case 'F':
      return 0.0;
    default:
      return 'None';
  }
}

const subjectList = subjectData.map(semester => semester.subjects).flat();

export const getCreditsBySubject = code => {
    const filtered = subjectList.find(subject => subject.code === code);
    return filtered.credits;
}