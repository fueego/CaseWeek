import caseWeekAppModule from '../../app';
import controller from './tasksReport.controller';
import template from './tasksReport.component.html';

var tasksReport = {
    bindings: {
        todoList: '<',
        updateList: '&',
    },
    controller,
    template
};

caseWeekAppModule.component('tasksReport', tasksReport);