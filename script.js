$(document).ready(function () {
  $("#pic1").click(function () {
    $("#pic1")
      .fadeOut(1000, function () {
        $("#pic1").attr("src", $("#pic1").attr("alt-pic"));
      })
      .fadeIn(1000);
    return false;
  });

  $("#pic2").click(function () {
    $("#pic2")
      .fadeOut(1000, function () {
        $("#pic2").attr("src", $("#pic2").attr("alt-pic"));
      })
      .fadeIn(1000);
    return false;
  });

  $("#pic3").click(function () {
    $("#pic3")
      .fadeOut(1000, function () {
        $("#pic3").attr("src", $("#pic3").attr("alt-pic"));
      })
      .fadeIn(1000);
    return false;
  });
});
