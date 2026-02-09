
import express from 'express';
import cors from 'cors'




const app=express();
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });
 
// get a list of 5 jokes
 app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'this is  joke'
        },
        {
            id : 2,
            title: 'another joke',
            content: 'this is joke'
        }
    ];
    res.send(jokes);
 })

// iska mtlb hai ydi hamare pass environment variable file h vha se lelo port nhi to fir 3000 ko lele

const port=3000;

app.listen(port,()=>{
    console.log(`server att http:loaclhost:${port}`);
});
