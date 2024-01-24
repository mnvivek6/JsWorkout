const express = require('express')

const app = express()

const hi = 'helo'

app.get('/',(req,res)=>{
    res.send(`welcome to${hi}`)
})
app.get('/about', (req, res) => {
    res.send(`About ${hi}`);
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });