const mongoose = require('mongoose')
const bddConnect = require('./bdd')
bddConnect('rattrapageProjet')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete : Boolean
})

const Task = mongoose.model('task',TaskSchema)

module.exports = Task