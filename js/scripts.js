$(document).ready(function(){
  $("#formf").submit(function(event){
    event.preventDefault();
    var favArray = [$("input#person").val(), $("input#animal").val(), $("input#place").val()];
    console.log(favArray);
    var newArray = [];
    newArray.push(favArray[1]);
    newArray.push(favArray[0]);
    newArray.push(favArray[2]);
    console.log(newArray);
    $(".output").append(newArray[0]);
    console.log(newArray[0]);
    $(".output2").append(newArray[1]);
    $(".output3").append(newArray[2]);

  });
});