module.exports = function(app){
    const controller = require('./controller');

    app.route('/').get((req,res)=>{
        res.send("Selamat Datang");
    })

    app.route('/run').get((req,res)=>{
        controller.run();
        res.end();
    })

}