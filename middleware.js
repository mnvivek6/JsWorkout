

app.get('/',middleware(),(req,res)=>{

    res.send('hi')
    res.end()
}).listen,3000


function middleware() {
    if (validation==userlogin) {
        console.log('user loggined');
    }else{
        console.log('cant access');
    }
}

