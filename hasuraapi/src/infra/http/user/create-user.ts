import { createUserService } from "@/domain/user/services";
import { httpResponse } from "@/shared";
import { Request, Response } from "express";

export default async function createUserController(
  request: Request,
  response: Response
) {
  const { email, last_name, name, password } = request.body;

  try {
    const service = await createUserService({
      email,
      last_name,
      name,
      password,
    });

    return httpResponse(response).ok(service, 201, "User created").respond();
  } catch (error: any) {
    return httpResponse(response, request).error(error).respond();
  }
}
