    const mongoose = require('mongoose')
    const express = require('express');
    const expressValidator = require('express-validator');
    let Schema =mongoose.Schema
    const app = express();
    const port = process.env.PORT || 3000

    app.get('/',(req,res)=>{
        res.json('you did it')
    })
    app.listen(port, () => {
        console.log('Server is up  on port' + port)
      })