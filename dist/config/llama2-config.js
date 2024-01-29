//import { config } from "dotenv";
import Replicate from "replicate";
export const configurellama2AI = () => {
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });
    return replicate;
};
//# sourceMappingURL=llama2-config.js.map