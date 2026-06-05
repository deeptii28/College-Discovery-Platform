export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Course {
  name: string;
  duration: string;
  fee: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  rating: number;
  fees: string;
  placements: string;

  overview: string;
  courses: Course[];
  reviews: Review[];
}