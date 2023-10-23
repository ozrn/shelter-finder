const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/needHelpNow?', { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('connected')
}

main()