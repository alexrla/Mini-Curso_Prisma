// Tabela do banco
export type JobEntity = {
  id?: number, 
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
};

export type Job = Omit<JobEntity, "id">;
export type JobTwo = Omit<JobEntity, "id" | "salary">;

export type NewJob = Partial<JobEntity>;
