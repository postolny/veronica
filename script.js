$(document).ready(function() {
  $(".btn").on("click", function() {
    var text1 = $('#text1').val().toUpperCase();
    var text2 = $('#text2').val().toUpperCase();
    var paganini = $("#paganini")[0];
    var aiaiai = $("#aiaiai")[0];
    if ((text1 === "") || (text2 === "")) {
      $("#msg").text("Сначала введите слово!").slideDown().delay(2000).slideUp();
    } else {
      if ((text1 === "ВЕРОНИКА") && (text2 === "НАЧНУ")) {
        $("#voto").css("display", "inline-block");
        paganini.play();
        aiaiai.pause();
        $("#text1, #text2").css("background", "#ffe4b5");
      } else {
        aiaiai.play();
        paganini.pause();
      }
    }
    return false;
  });
});