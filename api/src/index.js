const express = require('express');
const mysql = require('mysql');

// instanciando express
const app = express();

// criando conexao com o banco de dados
const connection = mysql.createConnection({
    host : '127.0.0.1',
    // host : 'mysql-container' utilizando quando criamos o link com o docker
    user : 'root',
    password : '123456',
    database : 'programadormaromba'
})

connection.connect();

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products',function(error,results){
        if(error){
            throw error;
        }
    })

    res.send(results.map(item => ({name: item.name, products : item.price}
        )));
})

// iniciando express
app.listen(9001,'0.0.0.0',function(){
    console.log('Listening on port 9001');
})