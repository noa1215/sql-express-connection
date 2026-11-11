import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicmodels",
});

app.get("/question1", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT COUNT(*) AS total FROM customers WHERE country ='France'",
  );
  res.json(rows);
});

app.get("/question2", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT firstName, lastName FROM employees WHERE reportsTo = 1143",
  );
  res.json(rows);
});

app.get("/question3", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT quantityInStock FROM products WHERE productLine='Classic Cars'",
  );
  res.json(rows);
});

//extra
app.get("/question4", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT COUNT(*) as totalOrders FROM orders",
  );
  res.json(rows);
});

app.get("/question5", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT COUNT(*) as customerInUSA FROM customers WHERE country='USA'",
  );
  res.json(rows);
});

app.get("/question6", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT MAX(amount) as highestPayment FROM payments",
  );
  res.json(rows);
});

app.get('/question7', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT * FROM employees WHERE jobTitle='Sales Rep'"
    )
    res.json(rows)
})

app.get('/question8', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT AVG(creditLimit) as avgCredLim from customers"
    )
    res.json(rows)
})
app.get('/question9', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT COUNT(DISTINCT productLine) AS numProductLines FROM products"

    )
    res.json(rows)
})
app.get('/question10', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT customerName FROM customers WHERE customerNumber NOT IN (SELECT customerNumber FROM orders)"
    )
    res.json(rows)
})
app.get('/question11', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT SUM(quantityInStock) AS tot FROM products"
    )
    res.json(rows)
})
app.get('/question12', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT buyPrice FROM products WHERE buyPrice > 100"
    )
    res.json(rows)
})
app.get('/question13', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT city, COUNT(*) AS numOffices FROM offices GROUP BY city ORDER BY numOffices DESC LIMIT 1"
    )
    res.json(rows)
})
app.get('/question14', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT * FROM orders WHERE YEAR(orderDate) = 2005"
    )
    res.json(rows)
})
app.get('/question15', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT DISTINCT c.customerNumber, c.customerName FROM customers c JOIN payments p ON c.customerNumber = p.customerNumber WHERE p.amount > 100000"
    )
    res.json(rows)
})
app.get('/question16', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT officeCode , COUNT(*) AS numEmployees GROUP BY officeCode"
    )
    res.json(rows)
})
app.get('/question17', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT creditLimit from customers ORDER BY creditLimit DESC LIMIT 5"
    )
    res.json(rows)
})

app.get('/question18', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT productName, quantityInStock FROM products ORDER BY quantityInStock DESC LIMIT 1"
    )
    res.json(rows)
})

app.get('/question19', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT SUM(amount) AS totalPayments FROM payments"
    )
    res.json(rows)
})

app.get('/question20', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT customerName FROM customers WHERE contactFirstName LIKE 'A%'"
    )
    res.json(rows)
})

app.get('/question21', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT COUNT(*)  AS totalOrders  FROM orders o JOIN customers c ON  c.customerNumber=o.customerNumber WHERE c.country='France'"
    )
    res.json(rows)
})



app.get('/question22', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT productCode, productName FROM products p WHERE p.buyPrice= (SELECT MIN(buyPrice) FROM products)"
    )
    res.json(rows)
})


app.get('/question23', async (req, res)=>{
    const [rows]=await pool.query(
        "SELECT reportsTo, COUNT(*) AS numReports FROM employees WHERE reportsTo IS NOT NULL GROUP BY reportsTo"
    )
    res.json(rows)
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
