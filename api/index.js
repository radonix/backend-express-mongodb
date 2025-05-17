import express from 'express';
import dotenv from 'dotenv';
import db from "./database/configdb.js";
import userRoute from "./routes/user.route.js";
import exampleRoute from "./routes/example.route.js";
import trainingRoutes from './routes/training.route.js';
import cors from 'cors';


dotenv.config();

db.connect();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use("/users",userRoute);
app.use("/secureExampleRoute",exampleRoute);
app.use("/trainings",trainingRoutes);
app.get('/',(_, res) => {
    res.send({message: 'Hello World'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}/`));
