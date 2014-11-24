var RadioQuiz = RadioQuiz || {};

RadioQuiz.rawQuiz = ""

RadioQuiz.getTest = function () {
    var testAjax = $.ajax( {
        url: "amat_basic_quest_delim.txt",
        dataType: "text",
        beforeSend: function() {},
        success: function(data, textStatus, jqXHR) { RadioQuiz.rawQuiz = data;},
        error: function() { alert("Failed to load quiz datafile."); },
        complete: function() {}
    });

    var questRE = /^(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+);(.+)$/;
    return testAjax.responseText;
}