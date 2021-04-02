import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
//Importo los Endpoints
import rebelIntelligenceRoutes from './routes/rebelIntelligence.routes';
import authRoutes from './routes/auth.routes';
import { createRoles, createSatellites} from './libs/init'

const app = express();

//Creo los roles
createRoles();
//Creo los satellites
createSatellites();

app.set("pkg",pkg);

//Para poder ver las pegadas que se realizan en consola.
app.use(morgan('dev'));

//Para que entienda en formato json
app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    });
})
app.use("/api",rebelIntelligenceRoutes);
app.use("/api/auth",authRoutes);

export default app;