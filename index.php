<?php

  $bg = rand(0,17);

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>2048</title>

  <link href="r/css/main.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="r/i/favicon.ico">

</head>
<body style="background:#666 url(r/css/i/bghtml<?php echo $bg;?>.jpg) repeat 0 0;">
  <div class="container">
    <div class="heading">
      <h1 class="title">
        <img width="274" height="175" src="r/i/logo2048.png" title="Doom2048">
      </h1>
    </div>

    <div class="laius">
      <p>
        This is just a merge between <a title="wikipedia page" href="http://en.wikipedia.org/wiki/Doom_%281993_video_game%29">D00M</a> universe and <a title="Gabrielli's 2048 github page" href="http://gabrielecirulli.github.io/2048/">2048</a>.
      </p>
    </div>


    <div class="game-container">
      <div class="game-message bignumber">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">Try again</a>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>

    <p class="game-explanation">
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same zombies touch, they <strong>merge into new one more stronger!</strong>
    </p>

    <p class="game-explanation smaller">
      As this game is a fork from a github account, you can obviously found this one on my <a title="my github account" href="https://github.com/korvus/2048">github account</a><br />
      You can found some of my parodic or own creations games <a target="_blank" href="http://paul.emik.free.fr">here</a>.
      You can write me at <a href="mailto:ecrivez.moi@simonertel.net">ecrivez.moi@simonertel.net</a><br />
    </p>
    

  </div>

  <section id="board">
    <div id="wrapBoardCentral">
      <div class="inset inset0 scores-container">
        <div class="bignumber score-container">0</div>
      </div>
      <div class="inset inset3">
        <a id="head" class="normal" title="you!">head</a>
      </div>
      <div class="inset inset1">
        <div class="bignumber best-container">0</div>
      </div>
      <div class="inset inset2">
        <a class="music off" title="stop/run the music" href="#musicoff"></a>
        <span class="subtitle">Sounds</span>
      </div>
    </div>
  </section>

  <script src="r/js/bind_polyfill.js"></script>
  <script src="r/js/classlist_polyfill.js"></script>
  <script src="r/js/animframe_polyfill.js"></script>
  <script src="r/js/keyboard_input_manager.js"></script>
  <script src="r/js/sounds.js"></script>
  <script src="r/js/html_actuator.js"></script>
  <script src="r/js/grid.js"></script>
  <script src="r/js/tile.js"></script>
  <script src="r/js/local_storage_manager.js"></script>
  <script src="r/js/game_manager.js"></script>
  <script src="r/js/application.js"></script>
</body>
</html>
