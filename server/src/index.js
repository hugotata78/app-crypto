const app = require('./app')

//iniciar servidor

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('name')} listening on port ${app.get('port')}`)
})