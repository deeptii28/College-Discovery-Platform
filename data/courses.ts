import { College } from "@/types";

export const colleges: College[] = [
  {
    id: "1",
    name: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    rating: 4.8,
    reviewCount: 3240,

    courses: ["course-1", "course-2"], // ✅ IDs only

    fees: "₹2.2L/year",
    rank: 1,
    rankSource: "NIRF 2024",
    image: "/iit-delhi.jpg",
    tags: ["Top", "Government"],
    established: 1961,
    type: "Government",
    approved: ["AICTE"],
  },
  {
    id: "2",
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    state: "Gujarat",
    rating: 4.9,
    reviewCount: 2100,

    courses: ["course-3", "course-4"],

    fees: "₹5L/year",
    rank: 1,
    rankSource: "NIRF 2024",
    image: "/iim.jpg",
    tags: ["Top", "Management"],
    established: 1961,
    type: "Government",
    approved: ["UGC"],
  },
];