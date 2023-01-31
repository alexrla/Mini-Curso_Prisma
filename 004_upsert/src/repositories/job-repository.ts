import prisma from "../database/database.js";
import { JobEntity, Job, NewJob } from "../protocols/Job.js";
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

async function upsert(job: NewJob) {
  return prisma.jobs.upsert(
    {
      where: { id: job.id || 0 },
      create: job as Job,
      update: {
        title: job.title
      }
    }
  )
}

export {
  findMany,
  insertUnique,
  upsert
};
