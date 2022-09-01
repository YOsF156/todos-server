const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  repeat: {
    type: String,
    enum: ['ללא', 'יומית', 'שבועית', 'חודשית',],
    default: 'ללא'
  },
  priority: {
    type: String,
    enum: ['בינונית', 'נמוכה', 'גבוהה'],
    default: 'נמוכה'
  },
  time: {
    type: String,
    required: true,
    default: false
  },
  create: {
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model("todo", TodoSchema);
