import prisma from "../database/database.js";
import { JobEntity, Job } from "../protocols/Job.js";
import { QueryResult } from "pg";

async function findMany() {
  // return prisma.jobs.findFirst(); - Retorna o primeiro registro da tabela
  return prisma.jobs.findMany(); // Retorna todos os registros da tabela
} 

async function insertUnique(job: Job) {
  return prisma.jobs.create(
    {
      data: job
    }
  );
}

export {
  findMany,
  insertUnique
};
