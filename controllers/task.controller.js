const Task = require('../models/task.model');

exports.taskCreate = (req, res) => {
    let task = new Task(
        {
            username: req.body.username,
            text: req.body.text,
            check: req.body.check,
            id: req.body.id,
        }
    );
    task.save( err => {
      if (err) return next(err);
      res.send(req.param.id);
    });
};


exports.taskAll = (req, res) => {
    Task.find({username:req.params.username}, (err, task) => {
        if (err) return next(err);
        res.send(task);
    })
};

exports.taskUpdate =  (req, res) => {

  const updatedItems = req.body.id.split(',');
  if (req.body.text) {
    Task.findOneAndUpdate({id:updatedItems}, {$set: req.body}, (err, task) => {
      if (err) return next(err);
      res.send();
    });
  }else{
    updatedItems.forEach(id => {
      Task.findOneAndUpdate({id: id}, {$set: {check: req.body.check}}, (err) => {
        if (err) return next(err);
        res.send();
      });
    });
  }
};

exports.taskDelete =  (req, res) => {
  const deletedItems = req.body.id.split(",");
    deletedItems.forEach(id => {
      Task.findOneAndDelete({id: id}, (err, task) => {
        if (err) return next(err);
        res.send();
      });
    });
};