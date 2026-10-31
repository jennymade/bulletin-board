<script></script>

<svelte:head>
  <meta charset="utf-8" />
  <title>jenny's whiteboard</title>
</svelte:head>

<!-- to do: sharpie as cursor? something to do with a sharpie -->

<div class="whiteBoard">
  <div class="websiteHeader">
    <div>
      <h1>
        <!--use jenny kwon or jennymade?-->
        <span class="jennyfont">jenny kwon</span><span class="definition"
          >noun</span
        >
      </h1>
    </div>
    <p>
      data-oriented visual designer-developer experienced at transforming messy
      data and concepts of a plan into clear, insightful storytelling
    </p>
    <p class="scrollInstructions">
      scroll down to see past work 👇 click or tab a post-it corner to read more
      🗒️
    </p>
  </div>

  <div class="notesScrollSection">
    <div class="notesParentWrapper">
      <ul class="notesScrollTrack">
        <li class="designNotesContainer">
          <h2 class="sectionHed">design</h2>
          <ul>
            <li class="note design" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Black families began moving to San Francisco in the 1940s seeking greater economic opportunity during World War II. Over the next few decades, they settled in neighborhoods from the Fillmore to the Bayview. The city's Black population reached its peak in 1970 before starting to decline. New data shows how the reversal reshaped every neighborhood, including three historically Black enclaves."
                  src="src/lib/thumbnails/blacksf-pt1-topper.gif"
                />
              </div>

              <div class="fold" tabIndex={0}>
                <div class="innerTriangle"></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note design" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Karin Flood remembers stepping out of her office at the corner of Powell and Market streets in San Francisco before the pandemic and facing shoulder-to-shoulder crowds outside. 'It was Times Square West,' she said. 'The kind of hustle and bustle and excitement you only get in a big city.' Stepping out of Powell and Market today finds a different scene."
                  src="src/lib/thumbnails/powellst.gif"
                />
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
                <img
                  alt="From 2019 to 2024, the state cited for-profit psychiatric hospitals over 17 potentially preventable deaths, 77 improper restraints or seclusion of patients and 128 physical or sexual assaults of patients"
                  src="src/lib/thumbnails/psychholds.gif"
                />
              </div>

              <div class="fold" tabIndex={0}>
                <div class="innerTriangle"></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note dataviz" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Behind locked drawers of file cabinets, in police departments all over California, sit documents no one is supposed to see.Known as clean-record agreements, they conceal the misconduct of hundreds of officers, helping them land new jobs in law enforcement. These documents have been secret — until this investigation."
                  src="src/lib/thumbnails/cra-pt1-dataviz.gif"
                />
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
</div>

<style>
  :root {
    /**** defining variables in the root ****/
    --wbBorder: 0.75rem;
    --notesTotalWidth: 1000vw;

    --noteHeight: 15rem;
    --noteWidth: 15rem;
    --maxHeight: 500px;
    --whiteboardColor: #fff;

    /* colors should match resume sections for design/visual continuity */
    --designBg: rgba(227, 255, 115, 0.75);
    --datavizBg: rgba(255, 189, 89, 0.75);
    --illoBg: rgba(230, 184, 255, 0.75);

    --designFold: rgba(204, 230, 103, 1);
    --datavizFold: rgba(230, 170, 80, 1);
    --illoFold: rgba(207, 165, 230, 1);

    /* adjust: how much do you want each thumbnail to match the section color */
    --noteFilter: opacity(85%);
    /* adjust: how much do you want the thumbnail to take up the note area: 0-1*/
    --noteVisibility: 0.9;
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
      font-family: "jennymadeFontV2", sans-serif;
      /* letter-spacing: -0.1rem; */
      font-size: 108px;
      line-height: 0.75;
    }

    .definition {
      font-family: "jennymadeFontV2", sans-serif;
      /* letter-spacing: -0.1rem; */
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

    /* styling header section for mobile */
    @media (max-width: 640px) {
      text-align: left;
      margin: 2rem;

      .jennyfont {
        font-size: 84px;
      }

      .definition {
        font-size: 36px;
      }

      p {
        font-size: 24px;
      }

      .scrollInstructions {
        font-size: 18px;
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
      height: auto;
    }

    .notesScrollSection {
      height: 400vh;
      view-timeline: --horizontal block;
    }

    .notesParentWrapper {
      position: sticky;
      top: 0;
    }

    .notesScrollTrack {
      width: var(--notesTotalWidth);
      overflow: visible;
      scroll-snap-type: none;
      animation: pan 1ms linear both;
      animation-timeline: --horizontal;
      animation-range: contain 0% contain 100%;
    }

    @keyframes pan {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-50vw, 0, 0);
      }
    }
  }

  .sectionHed {
    font-family: "jennymadeFontV2", sans-serif;
    font-size: 72px;
    /* adjust - either 300 or 700 */
    font-weight: 300;
    line-height: 0.75;
    text-align: center;
    letter-spacing: -0.2rem;
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
    border: 2px solid #000;
    overflow: hidden;
  }

  .designNotesContainer,
  .datavizNotesContainer,
  .illustrationNotesContainer {
    width: 50vw;
    height: 95vh; /* adjust if needed */
    flex: 2;
    margin: 0 auto;
    border: 1px solid #000; /* for debugging */
  }

  .designNotesContainer > ul,
  .datavizNotesContainer > ul,
  .illustrationNotesContainer > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    max-width: calc(
      var(--noteWidth) * 2 + 1rem
    ); /* max of two notes in one row */
    margin: 0 auto;
    padding: 0;
  }

  .note {
    flex: 0 1 var(--noteWidth);
    min-width: 0;
    position: relative;
    max-height: var(--maxHeight);
    height: var(--noteHeight);
    width: var(--noteWidth);
    transform: rotate(random(-2.5deg, 2.5deg));
  }

  .note:active,
  .note:focus {
    /* change color based on section */
    outline: 2.5px dashed #000;
  }

  /* matching fold colors based on section */
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
    font-family: "Futura PT", sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 1;
  }

  /* .noteDesc {
    font-family: "jennymadeFontV1", sans-serif;
    font-size: 36px;
  } */

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

  .noteContent > img {
    filter: var(--noteFilter);
    width: calc(var(--noteWidth) * var(--noteVisibility));
    height: calc(var(--noteHeight) * var(--noteVisibility));
  }

  /* styling for the fold microanimation specifically */

  /* little fold indicator without hover/focus */
  @keyframes foldUp {
    0% {
      transform: scale(1) translate3d(0, 0, 0);
    }
    50% {
      transform: scale(1.1) translate3d(-0.65rem, -1.3rem, 0);
    }
    100% {
      transform: scale(1) translate3d(0, 0, 0);
    }
  }

  .fold {
    animation: 5s foldUp ease-in-out;
    animation-iteration-count: infinite;
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
    transform: scale(1.5) translate3d(-2.5rem, -5rem, 0);
  }
</style>
