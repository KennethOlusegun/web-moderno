const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/web-moderno', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'Could not connect with MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })