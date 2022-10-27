import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import morganConfig from "@/config/morgan";

import userRouter from "./user/routes";

const app = express();

app.enable("trust proxy");

app
  .use(morgan(morganConfig.format, morganConfig.options))
  .use(compression({ level: 9 }))
  .use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  )
  .use(
    helmet.hsts({
      maxAge: 31536000,
      includeSubDomains: false,
      preload: true,
    })
  )
  .use(helmet.frameguard({ action: "sameorigin" }))
  .use(helmet.hidePoweredBy())
  .use(helmet.xssFilter())
  .use(helmet.permittedCrossDomainPolicies({ permittedPolicies: "all" }))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());

app.get("/", async (_req, res) => {
  const date = new Date().toUTCString();
  res.json({ message: "Server started!", date });
});

app.use("/user", userRouter);

export { app };
