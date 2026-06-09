// ⭐ REVIEW
export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

// ⭐ COURSE (global list)
export interface Course {
  id: string;
  name: string;
  duration: string;
  category: string;
  colleges: number;
  avgFees: string;
}

// ⭐ COLLEGE
export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  rating: number;
  reviewCount: number;

  courses: string[]; // ✅ IMPORTANT (IDs only)

  fees: string;
  rank: number;
  rankSource: string;
  image: string;
  tags: string[];
  established: number;
  type: string;
  approved: string[];
}

// ⭐ EXAM
export interface Exam {
  id: string;
  name: string;
  fullName: string;
  date: string;
  category: string;
  level: string;
  applicationDeadline: string;
}