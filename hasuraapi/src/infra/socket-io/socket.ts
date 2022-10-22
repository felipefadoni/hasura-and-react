import { getAllUserService } from "@/domain/user/services";
import { Server as HttpServer } from "http";
import { Server } from "socket.io";

export default function configSocketIo(server: HttpServer) {
  const socketIo = new Server(server, {
    transports: ["websocket"],
    cors: {
      origin: "*",
    },
    pingTimeout: 180000,
    pingInterval: 1000,
  });

  socketIo.on("connection", (socket) => {
    getAllUserService(socket);
  });
}
