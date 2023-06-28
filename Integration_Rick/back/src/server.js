const http = require('http');
http.createServer(
    (req, res) =>{
        res.setHeader("Acess-Contrl-Alllow-Origan", "*");
        const { url } = req
        console.log(url);
    })
    .liosten(3001, "localhost") 
    