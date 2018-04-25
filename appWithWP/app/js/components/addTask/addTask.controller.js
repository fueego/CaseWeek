class addTaskCtrl {
    constructor(todoListApi) {
        this.todoListApi = todoListApi;
    }

    $onInit() {
        this.taskTodo = '';
    };

    $onChanges(changes) {
        if(changes.todoList) {
            this.todoList = angular.copy(this.todoList);
        }
    };

    addTask() {
        let that = this;
        let taskTodo = this.taskTodo;

        if(taskTodo) {
            //check if there is no same task to do
            let checkMe = this.todoList.find(item => {
                return item.taskName === taskTodo && item.taskStatus === false;
            });

            if(checkMe) {
                console.log('There is pending task todo...');
            } else {
                let newTask = {
                    "taskName": this.taskTodo,
                    "taskStatus": false
                };

                this.todoListApi
                    .addItem(newTask)
                    .then(test => {
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

export default addTaskCtrl;