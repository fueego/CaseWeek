function taskEditor() {
    return {
        restrict: 'A',
        link: function($scope, $elem) {
            $elem.on('dblclick', function(event) {
                //end bubbling up ;)
                event.stopPropagation();
                
                //show input for edit
                if(event.target.className.includes('taskDescription')) {
                    $(this).find('span').css('display', 'none');
                    $(this).find('input[type="text"]').css('display', 'block').focus();
                }
            });

            $elem.on('click', function(event) {
                event.stopPropagation();

                if(!event.target.className.includes('taskDescription')) {
                    $('.taskPlace span').css('display', 'inline');
                    $('.taskPlace input[type="text"]').css('display', 'none');
                };
            });
        }
    }
}


angular
    .module('caseWeekApp')
    .directive('taskEditor', taskEditor);