class taskListCtrl {

    constructor(todoListApi) {
        this.todoListApi = todoListApi;
    }

    $onChanges(changes) {
        if(changes.todoList) {
            this.todoList = angular.copy(this.todoList);
        }
    };

    completeTask(item, index) {
        //closure for async response
        let that = this;

        //toggle boolean of task
        item.taskStatus = !item.taskStatus;
        
        //update local list
        this.todoList[index] = item;
        
        //update database
        this.todoListApi
            .updateItem(item)
            .then(test => {
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

    updateTask(item, index) {
        //closure for async response
        let that = this;

        //update local list
        this.todoList[index] = item;
        
        //update database
        this.todoListApi
            .updateItem(item)
            .then(test => {
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

    removeTask(item, index) {

        //closure for async response
        let that = this;

        //update local list
        this.todoList.splice(index, 1);

        //update database
        this.todoListApi
            .removeItem(item)
            .then(test => {
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

export default taskListCtrl;