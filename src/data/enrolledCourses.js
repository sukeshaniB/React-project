// Example structure for enrolledCourses
const enrolledCourses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    dueDate: '2024',
    progress:'60',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      // Additional enrolled students...
    ],
    dueDate: '2023-12-31', // Add a due date property
    progress: 50, // Add a progress property
  },
  // Additional courses...
];

export default enrolledCourses;
