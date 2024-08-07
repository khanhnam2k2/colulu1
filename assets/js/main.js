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

  // Product Details JS
  // open tab
  function openTab(evt, tabName) {
    let tabcontent = $(".productDetailsTab-content");
    let tablinks = $(".tab-links");

    tabcontent.hide();
    tablinks.removeClass(" active");
    $(tabName).fadeIn("slow");
    evt.currentTarget.className += " active";
  }

  //  open tab Merchandise
  $("#tabMerchandise").click(function (e) {
    openTab(e, "#Merchandise");
  });

  //  open tab Review
  $("#tabReview").click(function (e) {
    openTab(e, "#Review");
  });

  //  open tab Detail
  $("#tabDetail").click(function (e) {
    openTab(e, "#Detail");
  });

  // open/hide content in tab
  $(".productDetailsTab-toggle-content").click(function (e) {
    const target = $(this).data("target");
    $("#" + target).slideToggle("400");
    $(this).toggleClass("plus");
  });

  // submit form add cart
  $(".add-cart-form").on("submit", function (e) {
    e.preventDefault();

    let formData = {
      color: $('input[name="color"]:checked').val(),
      type: $("#type").val(),
      quantity: $("#quantity").val(),
      wrapping: $('input[name="wrapping"]:checked').val(),
    };
    console.log(formData);
  });
});
