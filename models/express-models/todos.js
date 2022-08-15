let tasks = {}; //
/*
tasks (defined above) will be a place to store tasks by person;
example:
{
  person1: [{task object 1}, {task object 2}, etc.],
  person2: [{task object 1}, {task object 2}, etc.],
  etc.
}
*/
//let person = [];

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },

  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    let taskedNameArr = [];
    taskedNameArr.push(tasks.name);

    console.log(taskedNameArr);
    if (tasks.name === undefined) {
      return [];
    } else return taskedNameArr;
  },

  add: function (name, task) {
    // saves a task for a given person

    /*     tasks.push(
      (tasks = {
        name,
        task,
      })
    ); */
    tasks = {
      name,
      task,
    };

    // tasks.push(tasks);

    //console.log(tasks);

    /* //this code doesn't work
     let addTask = {};
    addTask = {
      name,
      task,
    };
    tasks.push(addTask); */
  },

  list: function (name) {
    // returns tasks for specified person

    if (name == tasks.name) {
      return tasks.task;
    }
    return tasks;
  },

  complete: function (name, idx) {
    // marks a task complete
  },

  remove: function (name, idx) {
    // removes a tasks
  },
};
