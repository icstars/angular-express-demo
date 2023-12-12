const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  port: 3306, // Replace with the port you need - may be different from mine
  password: 'root', // Replace with your MySQL password
  database: 'task_example', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

// debug code I was using to see if the request was coming in or not
// app.use(function (req, res, next) {
//   console.log(req);
//   next()
// })

// CRUD routes
// Create (POST)
app.post('/api/tasks', (req, res) => {
  console.log(req);
  const { title, description } = req.body;
  const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';

  db.query(query, [title, description], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Error creating task' });
    } else {
      res.status(201).json({ message: 'Task created' });
    }
  });
});

// Read (GET)
app.get('/api/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      res.status(500).json({ error: 'Error retrieving tasks' });
    } else {
      res.json(results);
    }
  });
});

// Update (PUT)
app.put('/api/tasks/:id', (req, res) => {
  const { title, description } = req.body;
  const taskId = req.params.id;
  const query = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';

  db.query(query, [title, description, taskId], (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).json({ error: 'Error updating task' });
    } else {
      res.json({ message: 'Task updated' });
    }
  });
});

// Delete (DELETE)
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const query = 'DELETE FROM tasks WHERE id = ?';
  console.log("received delete")
  db.query(query, [taskId], (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ error: 'Error deleting task' });
    } else {
      res.json({ message: 'Task deleted' });
    }
  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
