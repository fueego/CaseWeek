import caseWeekAppModule from '../../app';
import link from './taskEditor.link';

function taskEditor() {
    return {
        restrict: 'A',
        link
    }
}

caseWeekAppModule.directive('taskEditor', taskEditor);