const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
  username: {type: String, required: true},
	text: {type: String, required: true},
	check: {type: Boolean, required: true},
	id: {type: String, required: true},
});

//Export the model
module.exports = mongoose.model('Task', TaskSchema);
