function todoListApi($http) {

    var remoteUrl = "http://localhost:4040/todo";

    this.getListData = function() {
        return $http
            .get(remoteUrl)
            .then( function(response) {
                return response;
            });
    };

    this.updateItem = function(item) {
        return $http
            .put(remoteUrl+'/'+item.id+'/', item);
    }

    this.removeItem = function(item) {
        return $http
            .delete(remoteUrl+'/'+item.id+'/');
    }

    this.addItem = function(item) {
        return $http
            .post(remoteUrl, item);
    }

    return {
        getListData: this.getListData,
        updateItem: this.updateItem,
        removeItem: this.removeItem,
        addItem: this.addItem
    };
}

todoListApi.$inject = ['$http'];

angular
    .module('caseWeekApp')
    .factory('todoListApi', todoListApi);