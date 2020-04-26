$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input=$("input#person2").val();
    var feeling1Input=$("input#feeling1").val();
    var exclaimation1Input=$("input#expclaimation1").val();
    var number1Input =$("input#number1").val();
    var noun1Input=$("input#noun1").val();
    var bodypart1Input=$("input#bodypart1").val();
    var noun2Input=$("input#noun2").val();
    var animal1Input=$("input#animal1").val();
    var verb1Input=$("input#verb1").val();
    var pastTenseVerb1Input=$("input#pastTenseVerb1").val();
    var number2Input=$("input#number1").val();

  $(".person1").text(person1Input);
  $(".person2").text(person2Input);
  $(".feeling1").text(feeling1Input);
  $(".exclaimation1").text(exclaimation1Input);
  $(".number1").text(number1Input);
  $(".noun1").text(noun1Input);
  $(".bodypart1").text(bodypart1Input);
  $("noun2").text(noun2Input);
  $(".animal1").text(animal1Input);
  $(".verb1").text(verb1Input);
  $(".pastTenseVerb1").text(pastTenseVerb1Input);
  $("number2").text(number2Input);

    $("#story").show();

    event.preventDefault();
  });
});