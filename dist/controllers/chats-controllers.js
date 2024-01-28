import Users from "../models/Users.js";
export const generateChatCompletioin = async (req, res, next) => {
    const { message } = req.body;
    const user = await Users.findById(res.locals.jwData.id);
    if (!user)
        return res
            .status(401)
            .json({ message: "User not registered OR Token malfunctioned" });
    // grab chats of user
    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    //static array
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });
    // send all chats with new one to API
    //get response
};
//# sourceMappingURL=chats-controllers.js.map