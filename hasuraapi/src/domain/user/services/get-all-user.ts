import { logger } from "@/config";
import { Socket } from "socket.io";
import { getAllUserRepository } from "../repositories";

export default function getAllUserService(socket: Socket) {
  const observable = getAllUserRepository();
  observable.subscribe((event) => {
    logger.info("USERS Event Update");
    socket.emit("users", event.data);
  });
}
