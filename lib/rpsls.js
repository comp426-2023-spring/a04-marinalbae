export { rps, rpsls };

function rps(move) {
	const moves = ['rock', 'paper', 'scissors'];

	if (move == undefined) {
		return {
			'player': moves[Math.floor(Math.random() * moves.length)]
		};

	} else if (!moves.includes(move)) {
		console.error('${move} is out of range.');
		throw new RangeError();
	} else {
		move = move.toLowerCase();
		oppMove = moves[Math.floor(Math.random() * moves.length)];
		
		var result = '';
		

		//Tie
		if(move === oppMove) {
			result = 'tie';
		}
		//R v S
		if (move === 'rock' && oppMove === 'scissors') {
			result = 'win';
		}
		//R v P
		if (move === 'rock' && oppMove === 'paper') {
			result = 'lose';
		}
		//P v S
		if (move === 'paper' && oppMove === 'scissors') {
			result = 'lose';
		}
		//P v R
		if (move === 'paper' && oppMove === 'rock') {
			result = 'win';
		}
		//S v R
		if (move === 'scissors' && oppMove === 'rock') {
			result = 'lose';
		}
		//S v P
		if (move === 'scissors' && oppMove === 'paper') {
			result = 'win';
		}
		
		return {
			player: move,
			opponent: oppMove,
			result: result
		};
	}
}

function rpsls(move) {
	const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
	if (move == undefined) {
		return {
			'player': moves[Math.floor(Math.random() * moves.length)]
		};
	} else if (!moves.includes(move)) {
		console.error('${move} is out of range.');
		throw new RangeError();
	} else {
		move = move.toLowerCase();
		oppMove = moves[Math.floor(Math.random() * moves.length)];
								
		var result = '';
					
		//Tie
		if(move === oppMove) {
			result = 'tie';
		}
		//R v S or L
		if (move === 'rock' && (oppMove === 'scissors' || oppMove === 'lizard')) {
			result = 'win';
		}
		//R v P or Sp
		if (move === 'rock' && (oppMove === 'paper' || oppMove === 'spock')) {
			result = 'lose';
		}
		//P v S or L
		if (move === 'paper' && (oppMove === 'scissors' || oppMove === 'lizard')) {
			result = 'lose';
		}
		//P v R or Sp
		if (move === 'paper' && (oppMove === 'rock' || oppMove === 'spock')) {
			result = 'win';
		}
		//S v R or Sp
		if (move === 'scissors' && (oppMove === 'rock' || oppMove === 'spock')) {
			result = 'lose';
		}
		//S v P or L
		if (move === 'scissors' && (oppMove === 'paper' || oppMove === 'lizard')) {
			result = 'win';
		}
		//L v P or Sp
		if (move === 'lizard' && (oppMove === 'paper' || oppMove === 'spock')) {
			result = 'win';
		}
		//L v R or S
		if (move === 'lizard' && (oppMove === 'rock' || oppMove === 'scissors')) {
			result = 'lose';
		}
		//Sp v R or S
		if (move === 'spock' && (oppMove === 'rock' || oppMove === 'scissors')) {
			result = 'win';
		}
		//Sp v P or L
		if (move === 'spock' && (oppMove === 'paper' || oppMove === 'lizard')) {
			result = 'lose';
		}

		return {
			player: move,
			opponent: oppMove,
			result: result
		};
	}
}
