import { env } from "@/config";
import crypto from "crypto";

type Props = {
  hash: string;
};

export default function decryptHash({ hash }: Props) {
  const key = crypto.scryptSync(env.cryptoPassword, "salt", env.cryptoSalt);
  const iv = Buffer.alloc(env.cryptoIv, 0);

  const decipher = crypto.createDecipheriv(env.cryptoAlgorithm, key, iv);

  let decrypted = decipher.update(hash, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
