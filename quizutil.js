var RadioQuiz = RadioQuiz || {};

RadioQuiz.clearQuestionUI = function () {
    $( '.questionanswer' ).empty();
};

RadioQuiz.displayQuestion = function ( question, language )  {
    var langoffset =  0;
    var selector = new String;
    var questionStr = new String;
    
    if (language == "french") {
        langoffset = 7;
    } else {
        langoffset = 2;
    }
    //alert(question);
    $( ".question" ).append(question[langoffset]);
    for( var i = 1; i < 5; i++) {
        questionStr = question[i + langoffset];
        selector = "#" + i.toString();
        $( selector ).append( questionStr );
    }
};