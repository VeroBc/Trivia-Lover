function printUserName(){
  
  let userName = document.getElementById("name").value;
  document.getElementById("demo").innerHTML = "Hola " + userName + "!";  

}

function choiceTheme(){

  let leaveInicio = document.getElementById("inicio");
  leaveInicio.classList.add("hide");

  let choice = document.getElementById("theme");
  choice.classList.remove("hide");

}

function getQuestionsA(){

  let leaveThemeA = document.getElementById("theme");
  leaveThemeA.classList.add("hide");

  let questionsA = document.getElementById("questionsA");
  questionsA.classList.remove("hide");

}

function getQuestionsB(){
  let leaveThemeB = document.getElementById("theme");
  leaveThemeB.classList.add("hide");

  let questionsB = document.getElementById("questionsB");
  questionsB.classList.remove("hide");

}

function getResultsA(){

  let leaveQuestionsA = document.getElementById("questionsA");
  leaveQuestionsA.classList.add("hide");

  let resultsUserA = document.getElementById("resultsUserA");
  resultsUserA.classList.remove("hide");

}

function getResultsDogLover() { 
            var ele = document.getElementsByName('doglover1'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result1").innerHTML = "Puntos: "+ele[i].value;              
            } 

            var ele = document.getElementsByName('doglover2'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result2").innerHTML = "Puntos: "+ele[i].value; 
            } 

            var ele = document.getElementsByName('doglover3'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result3").innerHTML = "Puntos: "+ele[i].value; 
            } 
        } 
  
function uncheckDogLover() {
  document.getElementById("olfato").checked = false;
  document.getElementById("audicion").checked = false;
  document.getElementById("gusto").checked = false;
  document.getElementById("sanbernardo").checked = false;
  document.getElementById("grandanes").checked = false;
  document.getElementById("labrador").checked = false;
  document.getElementById("pastoraleman").checked = false;
  document.getElementById("foxterrier").checked = false;
  document.getElementById("dalmata").checked = false;
}

function uncheckCatLover() {
          document.getElementById("10000años").checked = false;
          document.getElementById("7500años").checked = false;
          document.getElementById("5000años").checked = false;
          document.getElementById("gatotricolor").checked = false;
          document.getElementById("gatocalico").checked = false;
          document.getElementById("gatoquimera").checked = false;
          document.getElementById("zurdos").checked = false;
          document.getElementById("diestros").checked = false;
          document.getElementById("ninguno").checked = false;
}         


function getResultsCatLover() {
            var ele = document.getElementsByName('catlover1');

            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result4").innerHTML = "Puntos: "+ ele[i].value;
            }

            var ele = document.getElementsByName('catlover2');

            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result5").innerHTML = "Puntos: "+ ele[i].value;
            }

            var ele = document.getElementsByName('catlover3');

            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result6").innerHTML = "Puntos: "+ ele[i].value;
            } 
        }


function getResultsB(){

  let leaveQuestionsB = document.getElementById("questionsB");
  leaveQuestionsB.classList.add("hide");

  let resultsUserB = document.getElementById("resultsUserB");
  resultsUserB.classList.remove("hide");

}


function getThemesAgainA(){

  let leaveResultsA = document.getElementById("resultsUserA");
  leaveResultsA.classList.add("hide");

  let playAgain = document.getElementById("theme");
  playAgain.classList.remove("hide");

}


function getThemesAgainB(){

  let leaveResultsB = document.getElementById("resultsUserB");
  leaveResultsB.classList.add("hide");

  let playAgain = document.getElementById("theme");
  playAgain.classList.remove("hide");

}

function endGameA(){

  let goInicio = document.getElementById("inicio");
  goInicio.classList.remove("hide");

  let leaveResultsA = document.getElementById("resultsUserA");
  leaveResultsA.classList.add("hide");

}

function endGameB(){

  let goInicio = document.getElementById("inicio");
  goInicio.classList.remove("hide");

  let leaveResultsB = document.getElementById("resultsUserB");
  leaveResultsB.classList.add("hide");

}
