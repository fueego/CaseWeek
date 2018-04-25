export default function($scope, $elem) {
    $elem.on('dblclick', function(event) {
        //end bubbling up ;)
        event.stopPropagation();
        
        //show input for edit
        if(event.target.className.includes('taskDescription')) {
            let span = this.querySelector('span');
            let input = this.querySelector('input');

            span.style.display  = 'none';
            input.style.display = 'block';
            input.focus();                    
        }
    });

    $elem.on('click', function(event) {
        event.stopPropagation();

        if(!event.target.className.includes('taskDescription')) {
            let allSpan = document.querySelectorAll('.taskPlace span');
            let allInput = document.querySelectorAll('.taskPlace input');

            allSpan.forEach(item => item.style.display = 'inline');
            allInput.forEach(item => item.style.display = 'none');
        };
    });
}