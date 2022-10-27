import { logger } from "@/config";
import { Request, Response } from "express";

interface HttpResponse {
  status: (s: number) => any;
  ok: (data?: any, status?: number, msg?: string) => any;
  error: (error: any) => any;
  respond: () => Response;
  download: (body?: any) => any;
  body: (body: any) => any;
}

export default function httpResponse(
  res: Response,
  req?: Request<any, any, any, any>
): HttpResponse {
  let statusCode: number = 200;
  let message: string | null = "";
  let body: any = {};
  let info: any = {};

  const methods: any = {};

  methods.status = (status: number) => {
    statusCode = status;
    return methods;
  };

  methods.body = (body: any) => {
    body = body;
    return methods;
  };

  methods.ok = (data?: any, status?: number, msg?: string) => {
    statusCode = status || 200;
    message = msg || null;
    body = data || {};
    return methods;
  };

  methods.error = (error: any) => {
    if (process.env.NODE_ENV !== "test") {
      logger.error("ERROR:", error.message);
    }

    statusCode = error.statusCode || error.status || 500;
    message = error.message;

    if (/duplicate key value/.test(error.message)) {
      message =
        "The data you are trying to save already exists, review the data and save again.";
      statusCode = 409;
    }

    if (statusCode === 500) message = "Internal Server Error";

    body = message;

    if (req)
      info = {
        requestBody: { ...req.body },
        requestParams: { ...req.params },
        requestQuery: { ...req.query },
      };

    return methods;
  };

  methods.respond = (): Response => {
    let jsonReturn = {
      message,
      statusCode,
      body,
    };

    if (info) jsonReturn = { ...jsonReturn, ...info };

    return res.status(statusCode).json(jsonReturn);
  };

  methods.download = (body?: any): Response => res.send(body);

  return methods;
}
