var taskList = {
    controller: taskListCtrl,
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    templateUrl: '../app/js/components/tasksList/tasksList.component.html'
};

function taskListCtrl(todoListApi) {

    this.$onChanges = function(changes) {
        if(changes.todoList) {
            this.todoList = angular.copy(this.todoList);
        }
    };

    this.completeTask = function(item, index) {
        //closure for async response
        var that = this;

        //toggle boolean of task
        item.taskStatus = !item.taskStatus;
        
        //update local list
        this.todoList[index] = item;
        
        //update database
        todoListApi
            .updateItem(item)
            .then(function(test) {
                if(test.status === 200) {
                    //return list back to main component
                    that.updateList({
                        $event: {
                            list: that.todoList
                        }
                    });
                    
                    console.log('Update completed: ', test.data);
                }
            }
        );
    };

    this.updateTask = function(item, index) {
        //closure for async response
        var that = this;

        //update local list
        this.todoList[index] = item;
        
        //update database
        todoListApi
            .updateItem(item)
            .then(function(test) {
                if(test.status === 200) {
                    //return list back to main component
                    that.updateList({
                        $event: {
                            list: that.todoList
                        }
                    });
                    
                    console.log('Update completed: ', test.data);
                }
            }
        );
    };

    this.removeTask = function(item, index) {

        //closure for async response
        var that = this;

        //update local list
        this.todoList.splice(index, 1);

        //update database
        todoListApi
            .removeItem(item)
            .then(function(test) {
                if(test.status === 200) {

                    //return list back to main component
                    that.updateList({
                        $event: {
                            list: that.todoList
                        }
                    });

                    console.log('Item removed: ', item);
                }
            });
    }
}

taskListCtrl.$inject = ['todoListApi'];

angular
    .module('caseWeekApp')
    .component('tasksList', taskList);

