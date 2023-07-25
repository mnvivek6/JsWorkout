

// const express = require('express');
// const fs = require('fs')
// const app = express();

// // Sample data



// // GET endpoint to retrieve all users
// app.get('/', (req, res) => {
//   res.send("hi");
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
// res.send('<h1>Am vivek <h1>')
// })

// const port = 3000;
// app.listen(port,()=>{
//     console.log('server is runing');
// })


const express = require('express')

const app = express()

const hi= [{
    name:'vivek'
},{
    name:'dora'
},{
    name:'sama'
}]

app.get('/',(req,res)=>{
    res.send(hi)
})

app.listen(3000)
