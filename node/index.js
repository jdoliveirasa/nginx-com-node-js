const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
var data = {}
function insert() {
    let connection = mysql.createConnection(config)
    connection.connect(function (err) {
        if (err) throw err
        connection.query("INSERT INTO people(name, email) values('Jonathan de Oliveira', 'email@gmail.com')", function (err, result, fields) {
            if (err) throw err
            console.log(result)
        });
        connection.query("SELECT * FROM people", function (err, result, fields) {
            if (err) throw err
            console.log(result)
            data = result
        });
    });
}
insert()
app.get('/', (req, res) => {
    insert()
    var html = '<h1>Full Cycle Rocks!</h1>'
    html += '<br>'
    html += '<table style="width:25%">'
    html += '<tr>'
    html += '<th>Id</th>'
    html += '<th>Nome</th>'
    html += '<th>Email</th>'
    html += '</tr>'
    for (const item of data) {
        html += '<tr>'
        html += '<td>' + item.id + '</td>'
        html += '<td>' + item.name + '</td>'
        html += '<td>' + item.email + '</td>'
        html += '</tr>'
    }
    html += '</table>'
    res.send(html)
})
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})