var tasksReport = {
    controller: tasksReportCtrl,
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    templateUrl: '../app/js/components/tasksReport/tasksReport.component.html'
};

function tasksReportCtrl() {
    this.$onChanges = function(changes) {
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

angular
    .module('caseWeekApp')
    .component('tasksReport', tasksReport);