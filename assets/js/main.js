jQuery(function ($) {
  // Hiển thị nút khi cuộn xuống và ẩn đi khi không cuộn
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // Scroll lên
  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Đóng menu
  $("#btnCloseMenu").click(function (e) {
    e.preventDefault();
    $("#subMenu").removeClass("active");
  });

  // Mở menu
  $("#btnOpenMenu").click(function (e) {
    e.preventDefault();
    $("#subMenu").addClass("active");
  });

  // Register
  $(".register-form").on("submit", function (e) {
    e.preventDefault();

    let formData = {
      surname: $("#surname").val(),
      name: $("#name").val(),
      surname__kana: $("#surname__kana").val(),
      name__kana: $("#name__kana").val(),
      phone: $("#phone").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      zip__code: $("#zip__code").val(),
      address: $("#address").val(),
      gender: $('input[name="gender"]:checked').val(),
      year__brith: $("#year__brith").val(),
      month__brith: $("#month__brith").val(),
      day__brith: $("#day__brith").val(),
      gender__child: $('input[name="gender__child"]:checked').val(),
      year__brith__child: $("#year__brith__child").val(),
      month__brith__child: $("#month__brith__child").val(),
      day__brith__child: $("#day__brith__child").val(),
      privacy__policy: $("#privacy__policy").is(":checked"),
    };
    console.log(formData);
  });

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = $(".productTab-content");
    console.log(tabcontent);

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = $(".tab-links");
    console.log(tablinks.length);

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab

    $(cityName).fadeIn("slow");
    evt.currentTarget.className += " active";
  }
  $("#tabMerchandise").click(function (e) {
    openCity(e, "#Merchandise");
  });
  $("#tabReview").click(function (e) {
    openCity(e, "#Review");
  });
  $("#tabDetail").click(function (e) {
    openCity(e, "#Detail");
  });
});
