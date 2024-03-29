import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletioin } from "../controllers/chats-controllers.js";

const chatRoutes = Router();
chatRoutes.post(
    "/new",
     validate(chatCompletionValidator),
     verifyToken,
     generateChatCompletioin
     );

export default chatRoutes;