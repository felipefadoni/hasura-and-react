import { authenticateUserService } from "@/domain/user/services";
import { httpResponse } from "@/shared";
import { Request, Response } from "express";

export default async function authenticatedUserController(
  request: Request,
  response: Response
) {
  const { email, password } = request.body;
  try {
    const service = await authenticateUserService({
      email,
      password,
    });

    return httpResponse(response)
      .ok(service, 200, "User Authenticated")
      .respond();
  } catch (error: any) {
    return httpResponse(response, request).error(error).respond();
  }
}
