var RadioQuiz = RadioQuiz || {};

RadioQuiz.rawQuiz = ""
RadioQuiz.parsedQuiz = new Array(980); //Just a few extra

RadioQuiz.getTest = function () {
    var testAjax = $.ajax( {
        url: "amat_basic_quest_delim.txt",
        dataType: "text",
        beforeSend: function() {},
        success: function(data, textStatus, jqXHR) { RadioQuiz.rawQuiz = data;},
        error: function() { alert("Failed to load quiz datafile."); },
        complete: function() {}
    });

    var questRE = /^(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+)$/gm;    
   
    var quizdata = "";
    //discard the first match as it's just column names
    quizdata = questRE.exec( testAjax.responseText );
    quizdata = questRE.exec( testAjax.responseText ); 
    var resArray = new Array();
    while (quizdata) {    
        resArray.push(quizdata);
        quizdata = questRE.exec( testAjax.responseText );
    } 
    return resArray;
}