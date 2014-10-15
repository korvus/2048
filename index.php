<?php

  $bg = rand(0,20);

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>2048</title>

  <link href="r/css/main.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="r/i/favicon.ico">
  <link rel="apple-touch-icon" href="meta/apple-touch-icon.png">
  <link rel="apple-touch-startup-image" href="meta/apple-touch-startup-image-640x1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"> <!-- iPhone 5+ -->
  <link rel="apple-touch-startup-image" href="meta/apple-touch-startup-image-640x920.png"  media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"> <!-- iPhone, retina -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body style="background:#666 url(r/css/i/bghtml<?php echo $bg;?>.jpg) repeat 0 0;">
  <div class="container">
    <div class="heading">
      <h1 class="title">
        <img width="274" height="175" src="r/i/logo2048.png" title="Doom2048">
      </h1>
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
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
    </p>
    <hr>

  </div>

  <section id="board">
    <div id="wrapBoardCentral">
      <div class="inset inset0 scores-container">
        <div class="bignumber score-container">0</div>
      </div>
      <div class="inset inset1">
        <div class="bignumber best-container">0</div>
      </div>
      <div class="inset inset3">
        <a id="head" class="normal" title="you!">head</a>
      </div>
      <div class="inset inset2">
        <a class="music off" title="stop/run the music" href="#musicoff"></a>
        <span class="subtitle">Music</span>
      </div>
      <div class="above-game">
        <p class="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
        <a class="restart-button">New Game</a>
      </div>
    </div>
  </section>

  <script src="r/js/bind_polyfill.js"></script>
  <script src="r/js/classlist_polyfill.js"></script>
  <script src="r/js/animframe_polyfill.js"></script>
  <script src="r/js/keyboard_input_manager.js"></script>
  <script src="r/js/html_actuator.js"></script>
  <script src="r/js/grid.js"></script>
  <script src="r/js/tile.js"></script>
  <script src="r/js/local_storage_manager.js"></script>
  <script src="r/js/game_manager.js"></script>
  <script src="r/js/application.js"></script>
</body>
</html>
