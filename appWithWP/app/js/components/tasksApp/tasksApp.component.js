import caseWeekAppModule from '../../app';
import controller from './tasksApp.controller';
import template from './tasksApp.component.html';

var tasksApp = {
    controller,
    template
}

caseWeekAppModule.component('tasksApp', tasksApp);