const express = require('express');


const app = express();

app.get('/',(req,res) => {
    res.send('Hello, this is your Node.js Server');
})

app.listen(5000, () => 
    {console.log('Started on PORT 5000')
});
