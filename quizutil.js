var RadioQuiz = RadioQuiz || {};

RadioQuiz.clearQuestionUI = function () {
    $( '.questionanswer' ).empty();
};

RadioQuiz.displayQuestion = function ( question, language )  {
    var offset =  0;
    var selector = new String;
    var questionStr = new String;
    
    if (language == "french") {
        offset = 5;
    } else {
        offset = 0;
    }
    
    for( var i = 1; i < 5; i++) {
        questionStr = question[i];
        selector = "#" + i.toString();
        $( selector ).append( questionStr );
    }
};