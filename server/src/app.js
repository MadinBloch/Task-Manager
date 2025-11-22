import express from "express";
// import logger from "./middleware/logger";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            // add production url
            ],
            credentials: true,
 
    })
)
// app.use(logger);


app.use('/api/users', userRoutes);
app.use((req, res, next)    => {
    console.log("Incoming content-type:", req.headers["content-type"]);
    next();
});


app.get('/',(req,res)=>{
    res.send("Our API")
})


export default app;