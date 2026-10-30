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
      visual, data-oriented designer-developer experienced at crafting brand
      identity and narratives and transforming messy data into clear, insightful
      storytelling
    </p>
    <p class="scrollInstructions">scroll down to see past work 👇</p>
  </div>

  <div class="notesParentWrapper">
    <ul class="notesScrollTrack">
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

            <div class="fold design" tabIndex={0}>
              <div class="innerTriangle"></div>
              <div class="outerTriangle"></div>
            </div>
          </li>
          <li class="note dataviz" tabIndex={0}>
            <div class="noteContent">
              <h4 class="noteHed">dataviz work</h4>
              <p class="noteDesc"></p>
            </div>

            <div class="fold dataviz" tabIndex={0}>
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

            <div class="fold illustration" tabIndex={0}>
              <div class="innerTriangle"></div>
              <div class="outerTriangle"></div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style>
  :root {
    --wbBorder: 0.75rem;

    --noteHeight: 15rem;
    --noteWidth: 15rem;
    --maxHeight: 500px;
    --whiteboardColor: #fff;

    --designBg: rgba(227, 255, 115, 0.75);
    --datavizBg: rgba(255, 189, 89, 0.75);
    --illoBg: rgba(230, 184, 255, 0.75);

    --designFold: rgba(204, 230, 103, 1);
    --datavizFold: rgba(230, 170, 80, 1);
    --illoFold: rgba(207, 165, 230, 1);
  }

  .whiteBoard {
    /* silver border to mimic irl whiteboard */
    background-color: var(--whiteboardColor);
    border-radius: 0.5rem;
    border:
      var(--wbBorder) solid #dddddd 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 4px 8px 0 rgba(0, 0, 0, 0.2);

    /* overflow-y: auto; */
    height: 100vh;

    @media (max-width: 640px) {
      border: 0;
      border-radius: 0.5rem;
    }
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
      font-family: "Futura PT", sans-serif;
      font-weight: 300;
      letter-spacing: -0.01rem;
      font-size: 24px;
      font-weight: 400px;
    }

    .scrollInstructions {
      font-size: 18px;
    }

    @media (max-width: 640px) {
      text-align: left;
      margin: 2rem;

      .jennyfont {
        font-size: 72px;
      }

      .definition {
        font-size: 32px;
      }

      p {
        font-size: 18px;
      }

      .scrollInstructions {
        font-size: 16px;
      }
    }
  }

  /* fallback horizontal scrolling: swipe or scroll the row sideways directly. */
  .whiteBoard {
    height: 100vh;
  }

  .notesParentWrapper {
    height: 100vh;
    overflow: hidden;
  }

  .notesScrollTrack {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  /* styling for horizontal scrolling */
  /* vertical scrolling moves the track sideways. */
  @supports (animation-timeline: view()) {
    .whiteBoard {
      height: 400vh;
      view-timeline: --horizontal block;
    }

    .notesParentWrapper {
      position: sticky;
      top: 0;
    }

    .notesScrollTrack {
      width: 400%;
      overflow: visible;
      scroll-snap-type: none;
      animation: pan 1ms linear both;
      animation-timeline: --horizontal;
      animation-range: contain 0% contain 100%;
    }

    @keyframes pan {
      from {
        transform: translate3d(5vw, 0, 0);
      }
      to {
        transform: translate3d(-25vw, 0, 0);
      }
    }
  }

  .sectionHed {
    font-family: "jennymadeFontV1", sans-serif;
    font-size: 72px;
    line-height: 0.75;
    text-align: center;
  }

  .notesParentWrapper {
    display: flex;
    flex-direction: column;
    gap: 0rem; /* adjust */

    @media (min-width: 1280px) {
      flex-direction: row;
    }

    /* to make the horizontal scrolling work */
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }

  .designNotesContainer,
  .datavizNotesContainer,
  .illustrationNotesContainer {
    flex: 2;
    margin: 0 auto;
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
    background-color: var(--designBg);

    .innerTriangle {
      border-top: calc(var(--noteHeight) * 0.2) solid var(--designFold);
    }
  }

  .note.dataviz {
    background-color: var(--datavizBg);

    .innerTriangle {
      border-top: calc(var(--noteHeight) * 0.2) solid var(--datavizFold);
    }
  }

  .note.illustration {
    background-color: var(--illoBg);

    .innerTriangle {
      border-top: calc(var(--noteHeight) * 0.2) solid var(--illoFold);
    }
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

    .outerTriangle {
      border-left: calc(var(--noteHeight) * 0.2) solid transparent;
      border-bottom: calc(var(--noteHeight) * 0.2) solid var(--whiteboardColor);
      border-top: calc(var(--noteHeight) * 0.2) solid transparent;
      height: calc(var(--noteHeight) - 6rem);
      width: 0;
      position: absolute;
      right: 0px;
    }

    .innerTriangle {
      border-left: 0;
      border-right: calc(var(--noteHeight) * 0.2) solid transparent;
      border-top: calc(var(--noteHeight) * 0.2) solid transparent;
      border-bottom: 0;
      height: 0;
      width: 0;
      position: absolute;
      top: calc(var(--noteHeight) - 3rem);
      right: 0px;
    }
  }

  .fold:hover,
  .fold:focus {
    transform: scale(1.36) translate3d(-2.55rem, -5.25rem, 0);
  }
</style>
