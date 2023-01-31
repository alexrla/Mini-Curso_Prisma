import { Request, Response } from "express";
import { findMany, upsert } from "../repositories/job-repository.js";
import { NewJob } from "../protocols/Job.js";

import { JobSchema } from "../schemas/job-schema.js";

async function listAll(req: Request, res: Response) {
  const jobs = await findMany();
  // return res.send(jobs.map(job => job.title));
  return res.send(jobs);
}

async function insert(req: Request, res: Response) {
  const newJob = req.body as NewJob;

  const { error } = JobSchema.validate(newJob);

  if(error) {
    return res.status(400).send({
      message: error.message
    });
  }

  const job = await upsert(newJob);

  return res.send("Job inserido");
}

export {
  listAll,
  insert
};
