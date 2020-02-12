function check(){
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var question4=document.quiz.question4.value;
	var question5=document.quiz.question5.value;
	var question6=document.quiz.question6.value;
	var question7=document.quiz.question7.value;
	var question8=document.quiz.question8.value;
	var question9=document.quiz.question9.value;
	var question10=document.quiz.question10.value;
	var correct=0;

	if (question1 == "g2") {
		correct++;
	}
	if (question2 == "10") {
		correct++;
	}
	if (question3 == "sk") {
		correct++;
	}
	if (question4 == "2011") {
		correct++;
	}
	if (question5 == "vitality") {
		correct++;
	}
	if (question6 == "Broxah") {
		correct++;
	}
	if (question7 == "excel") {
		correct++;
	}
	if (question8 == "Iron") {
		correct++;
	}
	if (question9 == "2009") {
		correct++;
	}
	if (question10 == "origen") {
		correct++;
	}
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML="Du fick "+ correct + "/10 rätt.";
}