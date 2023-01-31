import { connection } from "../database/database.js";
import { JobEntity, Job } from "../protocols/Job.js";
import { QueryResult } from "pg";

async function findMany(): Promise<QueryResult<JobEntity>> {
  return connection.query(
    "SELECT * FROM jobs;"
  );
} 

async function insertUnique(job: Job): Promise<QueryResult<JobEntity>> {
  return connection.query(
    `
      INSERT INTO jobs (title, salary, skills, "isRemote", until) VALUES ($1, $2, $3, $4, $5);
    `,
    [job.title, job.salary, job.skills.toString(), job.isRemote, job.until]
  );
}

export {
  findMany,
  insertUnique
};
