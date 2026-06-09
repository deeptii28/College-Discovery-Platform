import { College, Course, Exam } from "@/types";

// ✅ COURSES
export const courses: Course[] = [
  {
    id: "course-1",
    name: "B.Tech",
    duration: "4 Years",
    category: "Engineering",
    colleges: 6381,
    avgFees: "₹1.5L/year",
  },
  {
    id: "course-2",
    name: "M.Tech",
    duration: "2 Years",
    category: "Engineering PG",
    colleges: 3100,
    avgFees: "₹1.2L/year",
  },
  {
    id: "course-3",
    name: "MBA",
    duration: "2 Years",
    category: "Management",
    colleges: 8083,
    avgFees: "₹8L/year",
  },
  {
    id: "course-4",
    name: "MBBS",
    duration: "5.5 Years",
    category: "Medical",
    colleges: 2559,
    avgFees: "₹5L/year",
  },
];

// ✅ COLLEGES
export const colleges: College[] = [
  {
    id: "college-1",
    name: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    rating: 4.8,
    reviewCount: 3240,
    courses: ["course-1", "course-2"],
    fees: "₹2.2L/year",
    rank: 1,
    rankSource: "NIRF 2024",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    tags: ["Top Ranked", "IIT", "Government"],
    established: 1958,
    type: "Government",
    approved: ["AICTE", "UGC", "NAAC A++"],
  },
  {
    id: "college-2",
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    state: "Gujarat",
    rating: 4.9,
    reviewCount: 2180,
    courses: ["course-3"],
    fees: "₹23L/year",
    rank: 1,
    rankSource: "NIRF MBA 2024",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    tags: ["Top MBA", "IIM", "Government"],
    established: 1961,
    type: "Government",
    approved: ["AICTE", "UGC", "AACSB"],
  },
  {
    id: "college-3",
    name: "AIIMS Delhi",
    location: "Delhi",
    state: "Delhi",
    rating: 4.9,
    reviewCount: 4500,
    courses: ["course-4"],
    fees: "₹1.6K/year",
    rank: 1,
    rankSource: "NIRF Medical 2024",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop",
    tags: ["Top Medical", "AIIMS", "Government"],
    established: 1956,
    type: "Government",
    approved: ["MCI", "NMC", "NAAC A++"],
  },
];

// ✅ EXAMS
export const exams: Exam[] = [
  {
    id: "exam-1",
    name: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    date: "Jan & Apr 2026",
    category: "Engineering",
    level: "National",
    applicationDeadline: "Nov 2025",
  },
];

// ✅ EXTRA DATA
export const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Pune",
  "Hyderabad",
];

export const rankings = [
  { source: "NIRF", count: 1360 },
];

export const studyGoals = [
  {
    label: "Engineering",
    icon: "⚙️",
    count: "6,381 Colleges",
    subCourses: ["B.Tech", "M.Tech"],
  },
];