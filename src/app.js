import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import RebelIntelligenceRoutes from './routes/RebelIntelligenceRoutes'
import AuthRoutes from './routes/AuthRoutes';
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
app.use("/api",RebelIntelligenceRoutes);
app.use("/api/auth",AuthRoutes);

export default app;