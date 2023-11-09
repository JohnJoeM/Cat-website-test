function CheckAnswers(){
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.colour.value;
    if (answer1 == "cyan"){
        score += 1;
    }
    else if (answer1 == "yellow"){
        score += 2;
    }
    else if (answer1 = "salmon"){
        score += 3;
    }
    else {
        score += 4;
    }
    if (answer1 == "cat"){
        score += 1;
    }
    else if (answer1 == "squirrel"){
        score += 2;
    }
    else if (answer1 = "bird"){
        score += 3;
    }
    else {
        score += 4;
    }
    if (answer1 == "dnb"){
        score += 1;
    }
    else if (answer1 == "soul"){
        score += 2;
    }
    else if (answer1 = "hiphop"){
        score += 3;
    }
    else {
        score += 4;
    }
    if (answer1 == "cat"){
        score += 1;
    }
    else if (answer1 == "squirrel"){
        score += 2;
    }
    else if (answer1 = "bird"){
        score += 3;
    }
    else {
        score += 4;
    }
    if (score < 6){
        result="Python";
    }
    if (score < 10){
        result="HTML"
    }
    if (score < 13){
        result="JSON"
    } 
    else {
        result="JS"
    }
    console.log(result)
    alert ("The programming laugauge for you is "+ result);

}