import { Request, Response } from "express";

// Definindo tipos: para parâmetros e para o retorno de uma função
function sayHello(name: string): void {
  console.log("Hello " + name + "!");
}

function convertSalary(salary: number): number {
  return salary + (salary * 0.3);
}

function convertCLTToPJ(req: Request, res: Response) {
  const { salary } = req.query; // string

  const newSalary = convertSalary(Number(salary));

  res.send({
    result: `O seu salário deve ser pelo menos: ${newSalary}`
  });
}

export {
  convertCLTToPJ
};
