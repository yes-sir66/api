const express = require('express');
const app = express();
const PORT = process.env.PORT|| 3030;

app.get('/',(req,res)=>{
    res.send('yasser')
})
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`    );
});