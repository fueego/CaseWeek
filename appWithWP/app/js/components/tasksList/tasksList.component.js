import caseWeekAppModule from '../../app';
import controller from './tasksList.controller';
import template from './tasksList.component.html';

var taskList = {
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    controller,
    template
};

caseWeekAppModule.component('tasksList', taskList);

