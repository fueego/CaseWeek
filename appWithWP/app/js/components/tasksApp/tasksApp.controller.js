class tasksAppCtrl {

    constructor(todoListApi) {
        this.todoListApi = todoListApi;
    }

    $onInit() {
        var that = this;

        this.todoList = [];

        this.todoListApi
            .getListData()
            .then(function(resp) {
                that.todoList = resp.data;
            }
        );
    };

    updateToDoList(event) {
        this.todoList = event.list;
        console.log("Parent list: ", this.todoList);
    };
}

tasksAppCtrl.$inject = ['todoListApi'];

export default tasksAppCtrl;