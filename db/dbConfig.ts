import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "authentiction"
        })
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database conected successfully")
        })

        connection.on('error', () => {
            console.log("An error occured duringin connecting database")
            process.exit();
        })
    } catch (error) {
        console.log("Something gone wrong")
        console.log(error)
    }

}