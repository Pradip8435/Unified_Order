 function toastOpen() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 

  }

// Tooltip js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


  $(document).ready(function ($) {
    // for secondary-sec btn
    var alterClass = function () {
      var ww = document.body.clientWidth;
      if (ww < 991) {
        $('.btn-desktop-group').addClass('dropdown-menu');
      } else if (ww >= 991) {
        $('.btn-desktop-group').removeClass('dropdown-menu');
      };
    };

    // for title-sec btn
    var abc = function () {
      var xy = document.body.clientWidth;
      if (xy < 767) {
        $('.title-sec-btn-group').addClass('dropdown-menu');
      } else if (xy >= 767) {
        $('.title-sec-btn-group').removeClass('dropdown-menu');
      };
    };
    var xyz = function () {
      var collapse = document.body.clientWidth;
      if (collapse < 767) {
        $('.collapse-head').attr('data-bs-toggle','collapse');
        $('.collapse-head').addClass('collaspe-header');
        $('.collapse-body').addClass('collapse');
      } else if (collapse >= 767) {
        $('.collapse-head').removeAttr('data-bs-toggle','collapse');
        $('.collapse-head').removeClass('collaspe-header');
        $('.collapse-body').removeClass('collapse');
      };
    };

    $(window).resize(function () {
      alterClass();
      abc();
      xyz();
    });

    //Fire it when the page first loads:
    alterClass();
    abc();
    xyz();
  });



// auditors js  for mobile
  function openCaroRemark(){
    $('.caro-remark').show()
     $('.parent-div').hide()
  }

// // page scroll top secondary header hide js
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {

//   var currentScrollPos = window.pageYOffset;
//   if (currentScrollPos > 100) {
//     document.getElementById("secondary-header").style.top = "-200px";
//   } else {
//     document.getElementById("secondary-header").style.top = "91px";

//   }
//   prevScrollpos = currentScrollPos;
// }

// sidebar close click nav-link js mobile view

$(document).ready(function() {
  var width = $(window).width();
if (width <= 991) {
  $(".nab-list").click(function(){
   $('.sidebar').addClass('close');
  });
}
 });
 


//  ticker
var $ticker = $('[data-ticker="list"]'),
    tickerItem = '[data-ticker="item"]'
    itemCount = $(tickerItem).length,
    viewportWidth = 0;

function setupViewport(){
    $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');
    
    for (i = 0; i < itemCount; i ++){
        var itemWidth = $(tickerItem).eq(i).outerWidth();
        viewportWidth = viewportWidth + itemWidth;
    }
    
    $ticker.css('width', viewportWidth);
}

function animateTicker(){
    $ticker.animate({
        marginLeft: -viewportWidth
      }, 20000, "linear", function() {
        $ticker.css('margin-left', '0');
        animateTicker();
      });
}

function initializeTicker(){
    setupViewport();
    animateTicker();
    
    $ticker.on('mouseenter', function(){
        $(this).stop(true);
    }).on('mouseout', function(){
        animateTicker();
    });
}

initializeTicker();



// Otp text box js

$(document).ready(function () {
  // console.clear();
  let inputs = document.querySelectorAll(".otp-form .otp-field");
  let values = Array(4);
  let clipData;

  inputs.forEach((tag, index) => {
    tag.addEventListener('keyup', (event) => {
      if (event.code === "Backspace" && hasNoValue(index)) {
        if (index > 0) inputs[index - 1].focus();
      }

      //else if any input move focus to next or out
      else if (tag.value !== "") {
        (index < inputs.length - 1) ? inputs[index + 1].focus() : tag.blur();
      }

      //add val to array to track prev vals
      values[index] = event.target.value;
    });

    tag.addEventListener('input', () => {
      //replace digit if already exists
      if (tag.value > 10) {
        tag.value = tag.value % 10;
      }
    });

    tag.addEventListener('paste', (event) => {
      event.preventDefault();
      clipData = event.clipboardData.getData("text/plain").split('');
      filldata(index);
    })
  })

  function filldata(index) {
    for (let i = index; i < inputs.length; i++) {
      inputs[i].value = clipData.shift();
    }
  }

  function hasNoValue(index) {
    if (values[index] || values[index] === 0)
      return false;

    return true;
  }


  // var dem = $(".sidebar.close").width();
  // $(".introjs-fixedTooltip").css("width", dem);


});


