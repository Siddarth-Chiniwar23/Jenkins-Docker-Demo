const express=require('exxpress');
const app=express();
app.get('/',(req,res)=>{
    res.send('Welcome to devops app using docer and jenkins');
})

app.listen(3000,()=>console.log('app is runnig at 3000'));