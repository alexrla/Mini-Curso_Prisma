import { Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/job-repository.js";
import { Job } from "../protocols/Job.js";

import { JobSchema } from "../schemas/job-schema.js";

async function listAll(req: Request, res: Response) {
  const jobs = await findMany();
  return res.send(jobs.rows);
}

async function insert(req: Request, res: Response) {
  const newJob = req.body as Job;

  const { error } = JobSchema.validate(newJob);

  if(error) {
    return res.status(400).send({
      message: error.message
    });
  }

  const job = await insertUnique(newJob);

  return res.send("Job inserido");
}

export {
  listAll,
  insert
};
