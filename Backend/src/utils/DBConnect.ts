import mongoose from "mongoose"

const DBConnect=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI as string)

        console.log("DB Connected Successfully")
    } catch (error: unknown) {
        const errorMessage=error instanceof Error?error.message:"DB Connection Failed"
        console.log("Error: ",errorMessage)
    }
}

export default DBConnect