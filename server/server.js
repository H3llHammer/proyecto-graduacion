const express = require("express");
const app = express();
const mysqlConn = require("./database");

app.set("port", process.env.port || 4000);

app.use(express.json());

app.get("/mesas", (req, res) => {
    mysqlConn.query("SELECT * FROM mesas",(err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    })
});

app.get("/mesas/:id", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM mesas WHERE id = ?";
    mysqlConn.query(query,[id], (err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    })
})

app.post("/mesas/add", (req, res) => {
    const { total, disponibles } = req.body;
    console.log(total, disponibles);
    for(let i=2;i<=120;i++)
    {
        const query = "INSERT INTO mesas (total, disponibles) VALUES (?, ?)";
        mysqlConn.query(query, [total, disponibles], (err, rows, fields) => {
        if(!err) console.log("Mesa agregada");
        else console.log(err)
    })
    }
})


app.listen(app.get("port"), () => {
    console.log(`Servidor ejecutandose en el puerto ${app.get("port")}`);
});