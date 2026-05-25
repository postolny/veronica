$(document).ready(function() {
  function verifica() {
    const correct = {
      "#text1": "ВЕРОНИКА",
      "#text2": "НАЧНУ"
    };
    const paganini = $("#paganini")[0];
    const aiaiai = $("#aiaiai")[0];
    let isCorrect = true;
    let hasEmpty = false;
    let firstError;
    for (const selector in correct) {
      const value = $(selector).val().toUpperCase();
      if (value === "") {
        hasEmpty = true;
        continue;
      }
      if (value !== correct[selector]) {
        showError(selector);
        isCorrect = false;
        if (!firstError) {
          firstError = selector;
        }
      }
    }
    if (hasEmpty) {
      $("#text1, #text2").removeClass("error");
      $("#msg").text("Сначала введите слово!").stop(true, true).slideDown().delay(2000).slideUp();
      return;
    } else if (isCorrect) {
      $("#voto").show();
      paganini.play();
      aiaiai.pause();
      $("#text1, #text2").css("background", "#ffe4b5").blur();
    } else {
      aiaiai.play();
      paganini.pause();
      $(firstError).focus();
    }
  }

  function showError(selector) {
    $(selector).addClass("error");
    setTimeout(function() {
      $(selector).removeClass("error");
    }, 300);
  }
  $(".btn").on("click", function() {
    verifica();
  });
  $(document).on("keydown", function(e) {
    if (e.key === "Enter") {
      verifica();
    }
  });
});