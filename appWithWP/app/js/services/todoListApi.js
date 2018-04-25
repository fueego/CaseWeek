import caseWeekAppModule from '../app';

class todoListApi {
    constructor($http) {
        this.$http = $http;
        this.remoteUrl = "http://localhost:4040/todo";
    }

    getListData() {
        return this.$http
            .get(this.remoteUrl)
            .then( function(response) {
                return response;
            });
    };

    updateItem(item) {
        return this.$http
            .put(this.remoteUrl+'/'+item.id+'/', item);
    };

    removeItem(item) {
        return this.$http
            .delete(this.remoteUrl+'/'+item.id+'/');
    };

    addItem(item) {
        return this.$http
            .post(this.remoteUrl, item);
    };
}

todoListApi.$inject = ['$http'];

caseWeekAppModule.service('todoListApi', todoListApi);