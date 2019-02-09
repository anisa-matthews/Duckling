//game loop
$(document).ready(function() {
  var hunger = 400;
  var timeStamp = new Date().getTime();
  // console.log("started");

  if (window.localStorage.getItem('hunger') != null) {
    hunger = window.localStorage.getItem('hunger');
  }

  if (timeStamp > window.localStorage.getItem('lastTime')) {
    var elapsedTime = timeStamp - window.localStorage.getItem('lastTime');
    console.log("last time:" + window.localStorage.getItem('lastTime'));
    console.log("elapsed:" + elapsedTime);

    function printLastTime() {
      document.getElementById('away').classList.remove('hidden');
      $('#away').html("You've been away for " + elapsedTime/1000 + " seconds");
    }

    printLastTime();

  }

  if (window.localStorage.getItem('lastBackground') != null) {
    var lastBG = "#" + window.localStorage.getItem('lastBackground') + "";
    // console.log(lastBG);
    $('#container').css("background-image", "url(" + $(lastBG).attr('src') + ")");
  }

  function refresh() {
    // console.log("referesh");
    var duckFace = ["angry_", "bored_", "crying_", "evil_", "happy_", "love_", "mad_", "meh_", "money_", "ok_", "oops_", "sad_", "silly_", "sly_"];
    var ranDuck = Math.floor(Math.random() * duckFace.length);
    var duckFilename = "ducks/" + duckFace[ranDuck] + "duck.png";
    document.getElementById('duck').src = duckFilename;

    if (hunger <= 0) {
      document.getElementById('duck').src = "ducks/dead_duck.png";
      document.getElementById('hunger').style.width = hunger + 'px';
      hunger = 0;
    } else {
      hunger -= 1;
      document.getElementById('hunger').style.width = hunger + 'px';
      // console.log(hunger);
    }

    window.localStorage.setItem('hunger', hunger);
    window.localStorage.setItem('lastTime', new Date().getTime())

    setTimeout(refresh, 1000);
  };
  refresh();

  //make food increase hunger bar - each button gives different points
  var grapes = $('#grapes');
  var lettuce = $('#lettuce');
  var bread = $('#bread');

  grapes.click(function() {
    if (hunger < 400) {
      hunger += 10;
      $('#hunger').css('width', hunger+'px');
      //$('#hunger').style.width = hunger + 'px';
    }
  });

  grapes.hover(
    function(){
      $('#grapeDesc').show();
    },
    function(){
      $('#grapeDesc').hide();
    });

  lettuce.click(function() {
    if (hunger < 400) {
      hunger += 20;
      $('#hunger').css('width', hunger + 'px');
    }
  });

  lettuce.hover(
    function(){
      $('#lettuceDesc').show();
    },
    function(){
      $('#lettuceDesc').hide();
  });

  bread.click(function() {
    if (hunger < 400) {
      hunger += 5;
      $('#hunger').css('width', hunger + 'px');
    }
  });

  bread.hover(
    function(){
      $('#breadDesc').show();
    },
    function(){
      $('#breadDesc').hide();
    });

  //change background
  $('#bg1').click(function(event) {
    // console.log("clicked!");
    window.localStorage.setItem('lastBackground', 'bg1');
    $('#container').css("background-image", "url(" + $(this).attr('src') + ")");
  });

  $('#bg1').hover(

    function(event) {
      $(this).css('opacity', '.5');
    },

    function(event) {
      $(this).css('opacity', '1');
    }
  );

  $('#bg2').click(function(event) {
    // console.log("clicked2!");
    window.localStorage.setItem('lastBackground', 'bg2');
    $('#container').css("background-image", "url(" + $(this).attr('src') + ")");
  });

  $('#bg2').hover(

    function(event) {
      $(this).css('opacity', '.5');
    },

    function(event) {
      $(this).css('opacity', '1');
    }
  );

  $('#bg3').click(function(event) {
    // console.log("clicked3!");
    window.localStorage.setItem('lastBackground', 'bg3');
    $('#container').css("background-image", "url(" + $(this).attr('src') + ")");
  });

  $('#bg3').hover(

    function(event) {
      $(this).css('opacity', '.5');
    },

    function(event) {
      $(this).css('opacity', '1');
    }
  );

  $('#bg4').click(function(event) {
    // console.log("clicked4!");
    window.localStorage.setItem('lastBackground', 'bg4');
    $('#container').css("background-image", "url(" + $(this).attr('src') + ")");
  });

  $('#bg4').hover(

    function(event) {
      $(this).css('opacity', '.5');
    },

    function(event) {
      $(this).css('opacity', '1');
    }
  );
});
