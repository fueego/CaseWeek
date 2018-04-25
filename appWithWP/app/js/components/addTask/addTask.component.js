import caseWeekAppModule from '../../app';
import controller from './addTask.controller';
import template from './addTask.component.html';

var addTaskObject = {
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    controller,
    template
}

caseWeekAppModule.component('addTask', addTaskObject);