import { Job } from "../protocols/Job.js";

const jobs: Job[] = [
  {
    id: 1,
    title: "Tech Lead",
    salary: 4000,
    skills: ["React", "Node.js"],
    isRemote: true,
    until: "2023-02-25"
  },
  {
    title: "Developer",
    salary: 2500,
    skills: ["React", "Node.js", "TypeScript"],
    isRemote: true,
    until: "2023-02-20"
  }
];

export default jobs;
