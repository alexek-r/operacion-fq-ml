if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

import app from "./app";
import "./database";


//Dejo la app escuchando en el puerto

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log("Server listen on port",app.get("port"));
});