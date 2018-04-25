class tasksReportCtrl {
    $onChanges(changes) {
        if(changes.todoList) {
            this.todoList = angular.copy(this.todoList);

            if(this.todoList) {
                this.total = this.todoList.length;
                this.completed = this.todoList.filter(function(comp) {
                    return comp.taskStatus === true;
                }).length;
                this.remain = this.total - this.completed;
            }
        };
    }
}

export default tasksReportCtrl;