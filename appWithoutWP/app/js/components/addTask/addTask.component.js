var addTaskObject = {
    controller: addTaskCtrl,
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    templateUrl: './app/js/components/addTask/addTask.component.html'
}

function addTaskCtrl(todoListApi) {
    this.$onInit = function() {
        this.taskTodo = '';
    };

    this.$onChanges = function(changes) {
        if(changes.todoList) {
            this.todoList = angular.copy(this.todoList);
        }
    }

    this.addTask = function() {
        var that = this;
        var taskTodo = this.taskTodo;

        if(taskTodo) {
            //check if there is no same task to do
            var checkMe = this.todoList.find(function(item) {
                return item.taskName === taskTodo && item.taskStatus === false;
            });

            if(checkMe) {
                console.log('There is pending task todo...');
            } else {

                var newTask = {
                    "taskName": this.taskTodo,
                    "taskStatus": false
                };

                todoListApi
                    .addItem(newTask)
                    .then(function(test) {
                        if(test.status === 201) {

                            //update local list
                            that.todoList.unshift(test.data);

                            //update parent list
                            that.updateList({
                                $event: {
                                    list: that.todoList
                                }
                            });

                            //clean input
                            that.taskTodo = '';

                            console.log('Item added:', test.data);
                        }
                });
            }
        }
    };
}

addTaskCtrl.$inject = ['todoListApi'];

angular
    .module('caseWeekApp')
    .component('addTask', addTaskObject);