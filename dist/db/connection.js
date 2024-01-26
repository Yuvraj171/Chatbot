import { connect, disconnect } from "mongoose";
//connect to database function
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to the MongoDB");
    }
}
// another function to disconnect from the database
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map