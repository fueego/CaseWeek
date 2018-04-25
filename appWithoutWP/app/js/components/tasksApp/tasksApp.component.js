var tasksApp = {
    controller: tasksAppCtrl,
    templateUrl: './app/js/components/tasksApp/tasksApp.component.html'
}

function tasksAppCtrl(todoListApi) {
    this.$onInit = function() {
        var that = this;

        this.todoList = [];

        todoListApi
            .getListData()
            .then(function(resp) {
                that.todoList = resp.data;
            }
        );
    };

    this.updateToDoList = function(event) {
        this.todoList = event.list;
        console.log("Parent list: ", this.todoList);
    };
}

tasksAppCtrl.$inject = ['todoListApi'];

angular
    .module('caseWeekApp')
    .component('tasksApp', tasksApp);