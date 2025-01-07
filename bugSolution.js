const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('OK');
  }).catch(error => {
    console.error('Error in request handler:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Simulate an asynchronous operation that might fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Simulated asynchronous error'));
    } else {
      resolve();
    }
  });
} 