<script></script>

<svelte:head>
  <meta charset="utf-8" />
  <title>jenny made this bulletin board</title>
</svelte:head>

<!-- to do: sharpie as cursor? something to do with a sharpie -->

<div class="whiteBoard">
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

  <ul class="notesParentWrapper">
    <li class="designNotesContainer">
      <h2 class="sectionHed">design</h2>
      <ul>
        <li class="note design" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">design work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
        <li class="note design" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">design work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
      </ul>
    </li>
    <li class="datavizNotesContainer">
      <h2 class="sectionHed">dataviz</h2>
      <ul>
        <li class="note dataviz" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">dataviz work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
        <li class="note dataviz" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">dataviz work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
      </ul>
    </li>
    <li class="illustrationNotesContainer">
      <h2 class="sectionHed">illustration</h2>
      <ul>
        <li class="note illustration" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">illo work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
        <li class="note illustration" tabIndex={0}>
          <div class="noteContent">
            <h4 class="noteHed">illo work</h4>
            <p class="noteDesc"></p>
          </div>

          <div class="fold" tabIndex={0}>
            <div class="innerTriangle"></div>
            <div class="outerTriangle"></div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>

<style>
  :root {
    --noteHeight: 15rem;
    --noteWidth: 15rem;
    --maxHeight: 500px;
    --whiteboardColor: #fff;
  }

  .whiteBoard {
    /* silver border to mimic irl whiteboard */
    background-color: var(--whiteboardColor);
    border-radius: 0.5rem;
    border-top: 1rem solid #aaaaaa;
    border-bottom: 1rem solid #aaaaaa;
    border-left: 1rem solid #cccccc;
    border-right: 1rem solid #cccccc;
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .websiteHeader {
    font-family: sans-serif;
    background-color: white;
    /* border: 1.5px solid #c9c9c9; */
    padding: 1rem;
    margin: 1rem auto;
    max-width: 640px;
    text-align: center;

    .jennyfont {
      font-family: "jennymadeFontV1", sans-serif;
      letter-spacing: -0.1rem;
      font-size: 96px;
      line-height: 0.75;
    }

    .definition {
      font-family: "jennymadeFontV1", sans-serif;
      letter-spacing: -0.1rem;
      font-size: 36px;
      color: #aaaaaa;
    }

    p {
      font-family: sans-serif;
      letter-spacing: 0.01rem;
      font-size: 24px;
      font-weight: 400px;
    }
  }

  .sectionHed {
    font-family: "jennymadeFontV1", sans-serif;
    font-size: 72px;
    line-height: 0.75;
    text-align: center;
  }

  .designNotesContainer,
  .datavizNotesContainer,
  .illustrationNotesContainer {
    margin: 0 auto;
    max-width: 640px;
    border: 1px solid #000; /* for debugging */
  }

  .note {
    position: relative;
    max-height: var(--maxHeight);
    height: var(--noteHeight);
    width: var(--noteWidth);
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
    font-size: 48px;
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
    border-left: calc(var(--noteHeight) * 0.2) solid transparent;
    border-bottom: calc(var(--noteHeight) * 0.2) solid var(--bgColor);
    border-top: calc(var(--noteHeight) * 0.2) solid transparent;
    height: calc(var(--noteHeight) - 8rem);
    width: 0;
    position: absolute;
    right: 0px;
  }

  .innerTriangle {
    border-left: 0;
    border-top: calc(var(--noteHeight) * 0.2) solid #aabf56;
    border-right: calc(var(--noteHeight) * 0.2) solid transparent;
    border-bottom: 0;
    height: 0;
    width: 0;
    position: absolute;
    top: calc(var(--noteHeight) - 4rem);
    right: 0px;
  }

  .fold:hover,
  .fold:focus {
    transform: scale(1.36) translate3d(-2.55rem, -5.25rem, 0);
  }
</style>
