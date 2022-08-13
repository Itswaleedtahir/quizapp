const quizQ = [

	{
		question: "What do you call a computer on a network that requests files from another computer?",
		a: "a client",
		b: "a host",
		c: "a router",
		d: "a web server",
		ans: "ans1"
	},{
		question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
		a: "peripheral",
		b: "clip art",
		c: "highlight",
		d: "execute",
		ans: "ans2"
	},{
		question: "The main computer that stores the files that can be sent to computers that are networked together is:",
		a: "clip art",
		b: "motherboard",
		c: "peripheral",
		d: "file server",
		ans: "ans3"
	},{
		question: "How can you catch a computer virus?",
		a: "Sending e-mail messages",
		b: "Using a laptop during the winter",
		c: "Opening e-mail attachments",
		d: "Shopping on-line",
		ans: "ans1"
	}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const btn = document.querySelector('#btn');
const answers = document.querySelectorAll('.answer');

let questionCounnt = 0;
let score = 0;

const loadQuestion = () =>{

	const questionList = quizQ[questionCounnt];
	question.innerText = questionList.question;

	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;


}

loadQuestion();

const getcheckanswer = ()=> {
	let answer;

	answers.forEach((curanswerelem) => {
		if (curanswerelem.checked) {
			answer = curanswerelem.id;
		}
	});
	return answer;
};

const nodefault = ()=>{
	answers.forEach((curanswerelem)=> curanswerelem.checked = false);
}

btn.addEventListener('click', ()=> {

	const checkAnswer = getcheckanswer();
	console.log(checkAnswer);


	if (checkAnswer == quizQ[questionCounnt].ans) {
		score++;
	}
	

	questionCounnt++;

	nodefault();

	if (questionCounnt<quizQ.length) {
		loadQuestion();

	}
	else{

		showscore.innerHTML=`
		<h3> You scored ${score}/${quizQ.length} </h3>
		<button class ="submit" onclick = "location.reload()">play again </button>
		`;

		showscore.classList.remove('scorearea');
	}

});
