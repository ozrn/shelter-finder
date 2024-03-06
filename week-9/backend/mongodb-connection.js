const mongoose = require('mongoose')

async function main () {
  mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1/needHelpNow?', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connected'))
    .catch(err => console.log(err))
}      
main()
  