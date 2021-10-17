$(function(){
    $('td').click(whoIs);
	$('td').click(markStep);
});

function whoIs(e) {
    let hlpstr = '';
    hlpstr += 'This is ' + e.target.id + '. ';
    let hlpcls = e.target.classList;
    if (!hlpcls.contains('white') && !hlpcls.contains('black')) {
        hlpstr += 'Empty here.';
    } else {
        if (hlpcls.contains('white')) {
            hlpstr += 'White '
        } else {
            hlpstr += 'Black '
        }
        if (hlpcls.contains('king')) {
            hlpstr += 'king here.'
        } else if (hlpcls.contains('queen')) {
            hlpstr += 'queen here.'
        } else if (hlpcls.contains('rook')) {
            hlpstr += 'rook here.'
        } else if (hlpcls.contains('bishop')) {
            hlpstr += 'bishop here.'
        } else if (hlpcls.contains('knight')) {
            hlpstr += 'knight here.'
        } else {
            hlpstr += 'pawn here.';
        }
    }
    console.log(hlpstr);
}

function markStep(e) {
    // 1 По клику на клетке пометить ее классом stepfrom.
	
    // 2 Если на кликнутой клетке уже есть такой класс, просто убрать его.
	
    // 3 Если есть другая клетка с этим классом, пометить кликнутую клетку классом stepto.
    // 4 Если на кликнутой клетке есть класс stepto, просто убрать его.
    // 5 Если на доске уже есть другая клетка с классом stepto, убрать классы stepfrom и stepto с ранее помеченных клеток, кликнутую пометить классом stepfrom.
    // Если после всех манипуляций на доске остались клетки с классами stepfrom и steptoб вывести в консоль объект вида {stepfrom: <cell id>, stepto: <cell id>}

	let isStepFrom = false;
	let isStepTo = false;
	document.querySelectorAll('.stepfrom').forEach(function(item){
		isStepFrom = true;
	});
	document.querySelectorAll('.stepto').forEach(function(item){
		isStepTo = true;
	});
	
	if (isStepFrom == true && isStepTo == false && event.target.className != 'stepfrom') {
		event.target.className = 'stepto';
	}
	else if (isStepFrom == false && event.target.className != 'stepto') {
		event.target.className = 'stepfrom';
	}
	else if (event.target.className == 'stepfrom') {
		event.target.className = '';
	}
	else if (event.target.className == 'stepto') {
		event.target.className = '';
	}
	else if (isStepFrom == true && isStepTo == true && event.target.className != 'stepfrom'	&& event.target.className != 'stepto') {
		document.querySelectorAll('.stepfrom').forEach(function(item){
			item.className = '';
		});
		document.querySelectorAll('.stepto').forEach(function(item){
			item.className = '';
		});	
		event.target.className = 'stepfrom';
	}
	else {
		document.querySelectorAll('.stepfrom').forEach(function(item){
			console.log('stepfrom: ' + item.id);
		});
		document.querySelectorAll('.stepto').forEach(function(item){
			console.log('stepto: ' + item.id);
		});
	}            
}

