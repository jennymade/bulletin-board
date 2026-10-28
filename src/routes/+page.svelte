<script></script>

<svelte:head>
  <meta charset="utf-8" />
  <title>jenny made this bulletin board</title>
</svelte:head>

<div class="websiteHeader">
  <div>
    <h1>
      <span class="jennyfont">jennymade</span><span class="definition"
        >adjective</span
      >
    </h1>
  </div>
  <p>
    Visual, data-minded designer-developer experienced at crafting brand
    identity and narratives and transforming messy data into clear, insightful
    storytelling
  </p>
</div>

<ul class="notesContainer">
  <li class="note design" tabIndex={0}>
    <div class="noteContent">
      <h2 class="noteHed">design</h2>
      <p class="noteDesc"></p>
    </div>

    <div class="fold" tabIndex={0}>
      <div class="innerTriangle"></div>
      <div class="outerTriangle"></div>
    </div>
  </li>
  <li class="note dataviz" tabIndex={0}>
    <div class="noteContent">
      <h2 class="noteHed">data viz</h2>
      <p class="noteDesc"></p>
    </div>

    <div class="fold" tabIndex={0}>
      <div class="innerTriangle"></div>
      <div class="outerTriangle"></div>
    </div>
  </li>
  <li class="note illustration" tabIndex={0}>
    <div class="noteContent">
      <h2 class="noteHed">illustration</h2>
      <p class="noteDesc"></p>
    </div>

    <div class="fold" tabIndex={0}>
      <div class="innerTriangle"></div>
      <div class="outerTriangle"></div>
    </div>
  </li>
</ul>

<style>
  :root {
    --height: 20rem;
    --width: 20rem;
    --maxHeight: 500px;
    --bgColor: #ba8c63;
  }

  .websiteHeader {
    font-family: sans-serif;
    background-color: white;
    border: 1.5px solid #c9c9c9;
    padding: 1rem;
    margin: 0 auto;
    max-width: 640px;
    text-align: center;

    .jennyfont {
      font-family: "jennymadeFontV1", sans-serif;
      font-size: 96px;
      line-height: 0.75;
    }

    .definition {
      font-family: sans-serif;
      font-size: 24px;
      color: #aaaaaa;
    }

    p {
      font-size: 24px;
      font-weight: 400px;
    }
  }

  .note {
    position: relative;
    max-height: var(--maxHeight);
    height: var(--height);
    width: var(--width);
    transform: rotate(random(-2.5deg, 2.5deg));
  }

  .note.design {
    background-color: rgba(201, 226, 101, 0.75);
  }

  .note.dataviz {
    background-color: rgba(255, 189, 89, 0.75);
  }

  .note.illustration {
    background-color: rgba(230, 184, 255, 0.75);
  }

  .noteHed {
    font-family: "jennymadeFontV1", sans-serif;
    font-size: 72px;
    line-height: 0.75;
  }

  .noteDesc {
    font-family: "jennymadeFontV1", sans-serif;
    font-size: 36px;
  }

  ul {
    list-style-type: none;
  }

  .noteContent {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .fold {
    transition: transform 400ms ease-in-out;
    /* z-index: 2; */
  }

  .outerTriangle {
    border-left: calc(var(--height) * 0.2) solid transparent;
    border-bottom: calc(var(--height) * 0.2) solid var(--bgColor);
    border-top: calc(var(--height) * 0.2) solid transparent;
    height: calc(var(--height) - 8rem);
    width: 0;
    position: absolute;
    right: 0px;
  }

  .innerTriangle {
    border-left: 0;
    border-top: calc(var(--height) * 0.2) solid #aabf56;
    border-right: calc(var(--height) * 0.2) solid transparent;
    border-bottom: 0;
    height: 0;
    width: 0;
    position: absolute;
    top: calc(var(--height) - 4rem);
    right: 0px;
  }

  .fold:hover,
  .fold:focus {
    transform: scale(1.36) translate3d(-2.55rem, -5.25rem, 0);
  }
</style>
