const express = require("express");
const router = express.Router();
const mysqlConn = require("../database");

router.post("/add", (req, res) => {
    const { idUsuario, fecha, cantidad } = req.body;
    mysqlConn.query("INSERT INTO reservaciones (ID_usuario,fecha,cantidad) VALUES(?,?,?);",
    [idUsuario, fecha, cantidad], (err, rows, fields) => {
        if(!err) res.json({ Status: "Se realizo la reservacion con exito"})
        else console.log(err);
    });
});

router.get("/", (req, res) => {
    mysqlConn.query("SELECT * FROM reservaciones;", (err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConn.query("SELECT * FROM reservaciones WHERE id = ?;", [id], (err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConn.query("DELETE FROM reservaciones WHERE id = ?;", [id], (err, rows, fields) => {
        if(!err) res.json({ Status: "Reservacion cancelada"});
        else console.log(err);
    })
})

module.exports = router;