$(document).ready(function(){
  var toCalcD = [], screenLimit = 16, operators = ['/','-','x','+'], currentOperator = '';

  $('#keys>p').click(function(e){
    if(toCalcD.length <= screenLimit) {
      var punchedNum = e.currentTarget.innerText;
      toCalcD.push(punchedNum);
      $('#screen .calculation').text(toCalcD.join(''));
    }
  });
  $('#operators>span').click(function(e){
    if(toCalcD.length < screenLimit) {
      var punchedOperator = e.currentTarget.innerText;
      currentOperator = punchedOperator;
      toCalcD.push(punchedOperator);
      $('#screen .calculation').text(toCalcD.join(''));
    }
  });
  $('#calculate').click(function(){
    if(operators.indexOf(currentOperator) > -1) {
      console.log(operators.indexOf(currentOperator));
      var tocalcS = $('#screen .calculation').text();

      var ans;

      var lhs = Number(tocalcS.split(currentOperator)[0]) || 0;
      var rhs = Number(tocalcS.split(currentOperator)[1]) || 0;
      switch (currentOperator) {
        case '+':
          ans = lhs + rhs;
          $('#screen .result').text(ans);
          toCalcD = [];
          $('#screen .calculation').text(toCalcD.join(''));
          break;
        case '-':
          ans = lhs - rhs;
          $('#screen .result').text(ans);
          toCalcD = [];
          $('#screen .calculation').text(toCalcD.join(''));
          break;
        case 'x':
          ans = lhs * rhs;
          $('#screen .result').text(ans);
          toCalcD = [];
          $('#screen .calculation').text(toCalcD.join(''));
          break;
        case '/':
          ans = lhs / rhs;
          $('#screen .result').text(ans);
          toCalcD = [];
          $('#screen .calculation').text(toCalcD.join(''));
      }
    }
  });
  $('.controls .clear').click(function(){
    toCalcD = [];
    $('#screen .calculation').text(toCalcD.join(''));
    if(toCalcD.join('') !== '0') {
      $('#screen .result').text('0');
    }
  });
  $('.controls .backspace').click(function(){
    toCalcD.pop();
    $('#screen .calculation').text(toCalcD.join(''));
  });
});