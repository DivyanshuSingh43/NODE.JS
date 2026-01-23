const {sumRequestHandler} = require('./sum');
const requestHandler = (req, res) => {
    console.log(req.url,req.method);
    if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
    <head><title>Practice set</title></head>
    <body>
    <h1>Welcome to calculator</h1></body>
    <a> href="/calc">Go to calculator</a>
    </body>
    </html>
    `);
    return res.end();

}else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
    <head><title>Practice set</title></head>
    <body>
    <h1>Here is the calculator</h1></body>
    <form action="/calculator-result" method="POST">
    <input type="text" placeholder="First Number" name="first"/>
    <input type="text" placeholder="Second Number" name="second"/>
    <input type="submit" value="Sum"/>
    </form>
    </body>
    </html>
    `);
    return res.end();


    }else if(req.url.toLowerCase() === '/calculator-result' &&
        req.method === 'POST'){
        return sumRequestHandler(req,res);
        }
        

res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
    <head><title>Practice set</title></head>
    <body>
    <h1>Page not found 404 </h1>
    <h1>Welcome to calculator</h1></body>
    <a href="/calc">Go to calculator</a>
    </body>
    </html>
    `);
    return res.end();
}

exports.requestHandler = requestHandler;