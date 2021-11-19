import { Request, response, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {

  async handle(request:Request, response : Response) : Promise<Response>{
    console.log("Chegou no handle CreateUserController");
    const { name,username,email,password,driver_license} = request.body
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute( { name,username,email,password,driver_license});
    return response.status(201).send();
  }
  
}

export { CreateUserController}