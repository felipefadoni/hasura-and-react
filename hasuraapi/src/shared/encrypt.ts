import { env } from "@/config";
import crypto from "crypto";

type Props = {
  values: any;
};

export default function encryptValues({ values }: Props): string {
  const key = crypto.scryptSync(env.cryptoPassword, "salt", env.cryptoSalt);
  const iv = Buffer.alloc(env.cryptoIv, 0);

  const cipher = crypto.createCipheriv(env.cryptoAlgorithm, key, iv);

  let tokenEncrypted = cipher.update(values, "utf8", "hex");
  tokenEncrypted += cipher.final("hex");

  return tokenEncrypted;
}
