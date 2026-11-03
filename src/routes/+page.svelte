<script>
  import blacksf from "#lib/thumbnails/blacksf-pt1-topper.gif";
  import crapt1 from "#lib/thumbnails/cra-pt1-dataviz.gif";
  import powellst from "#lib/thumbnails/powellst.gif";
  import psychholds from "#lib/thumbnails/psychholds.gif";
  import covidwastewater from "#lib/thumbnails/covid-wastewater.gif";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <title>jenny's whiteboard</title>
</svelte:head>

<!-- to do: sharpie as cursor? something to do with a sharpie -->

<!-- to fix: if animation on fold hover/focus doesn't work, take tabIndex away from the fold — only leave for post-it -->

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
      data-oriented visual designer-developer experienced at ideating, grabbing
      and transforming messy data into clear, insightful storytelling
    </p>
    <p class="socialLinks">
      <a
        href="https://drive.google.com/file/d/1wZH1PEBVWHrw-L12Tg9NLdPZ7PnK-dnR/view?usp=sharing"
        >resume</a
      > <span class="interpunctStar">✶</span>
      <a href="https://www.linkedin.com/in/kwonjs/">linkedin</a>
    </p>
    <p class="scrollInstructions">
      keep scrolling <span class="scrollIndicator">👇</span>
    </p>
  </div>

  <div class="notesScrollSection">
    <div class="notesParentWrapper">
      <ul class="notesScrollTrack">
        <li class="design notesContainer">
          <h2 class="sectionHed">design<span>✴</span></h2>
          <ul>
            <li class="note design" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Black families began moving to San Francisco in the 1940s seeking greater economic opportunity during World War II. Over the next few decades, they settled in neighborhoods from the Fillmore to the Bayview. The city's Black population reached its peak in 1970 before starting to decline. New data shows how the reversal reshaped every neighborhood, including three historically Black enclaves."
                  src={blacksf}
                />
              </div>

              <div class="fold design">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note design" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Karin Flood remembers stepping out of her office at the corner of Powell and Market streets in San Francisco before the pandemic and facing shoulder-to-shoulder crowds outside. 'It was Times Square West,' she said. 'The kind of hustle and bustle and excitement you only get in a big city.' Stepping out of Powell and Market today finds a different scene."
                  src={powellst}
                />
              </div>

              <div class="fold design">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note design" tabIndex={0}>
              <div class="noteContent">
                <h4 class="noteHed">design work</h4>
                <p class="noteDesc"></p>
              </div>

              <div class="fold">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
          </ul>
        </li>
        <li class="dataviz notesContainer">
          <h2 class="sectionHed">dataviz<span>✧</span></h2>
          <ul>
            <li class="note dataviz" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="From 2019 to 2024, the state cited for-profit psychiatric hospitals over 17 potentially preventable deaths, 77 improper restraints or seclusion of patients and 128 physical or sexual assaults of patients"
                  src={covidwastewater}
                />
              </div>

              <div class="fold">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note dataviz" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="From 2019 to 2024, the state cited for-profit psychiatric hospitals over 17 potentially preventable deaths, 77 improper restraints or seclusion of patients and 128 physical or sexual assaults of patients"
                  src={psychholds}
                />
              </div>

              <div class="fold">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note dataviz" tabIndex={0}>
              <div class="noteContent">
                <img
                  alt="Behind locked drawers of file cabinets, in police departments all over California, sit documents no one is supposed to see.Known as clean-record agreements, they conceal the misconduct of hundreds of officers, helping them land new jobs in law enforcement. These documents have been secret — until this investigation."
                  src={crapt1}
                />
              </div>

              <div class="fold dataviz">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
          </ul>
        </li>
        <li class="illustration notesContainer">
          <h2 class="sectionHed">illustration<span>✽</span></h2>
          <ul>
            <li class="note illustration" tabIndex={0}>
              <div class="noteContent">
                <h4 class="noteHed">illo work</h4>
                <p class="noteDesc"></p>
              </div>

              <div class="fold">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
            <li class="note illustration" tabIndex={0}>
              <div class="noteContent">
                <h4 class="noteHed">illo work</h4>
                <p class="noteDesc"></p>
              </div>

              <div class="fold illustration">
                <div class="innerTriangle"><span>read more</span></div>
                <div class="outerTriangle"></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer">
    <p>let's collaborate: kwonjseo at gmail dot com</p>
  </div>
</div>

<style>
  :root {
    /**** defining variables in the root ****/
    --wbBorder: 0.75rem;
    --notesTotalWidth: 1000vw;

    --noteHeight: 15rem;
    --noteWidth: 15rem;

    --mobilePan: -50vw;

    @media screen and (max-width: 672px) {
      --noteHeight: 15rem;
      --noteWidth: 15rem;
      --mobilePan: -150vw;
    }

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
    --noteFilter: opacity(90%);
    /* adjust: how much do you want the thumbnail to take up the note area: 0 (hero image isn't visible at all) -1 (the note color isn't visible at all — only hero image (no border))*/
    --noteVisibility: 1;
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
    padding-top: 1rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem; /* adjust */
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

    .socialLinks {
      /* "Futura PT", sans-serif; */
      font-family: "jennymadeFontV2", sans-serif;
      font-weight: 300;
      letter-spacing: -0.01rem;
      font-size: 2rem;
      font-weight: 400px;

      .interpunctStar {
        font-size: 12px;
        vertical-align: middle;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      a:active,
      a:hover,
      a:focus {
        text-decoration-style: wavy;
        text-decoration-line: underline;
        text-decoration-thickness: 2.5px;
        text-underline-offset: 1px;
        text-decoration-skip-ink: auto;
        text-decoration-color: #000;
      }
    }

    .scrollInstructions {
      font-size: 24px !important;
    }

    /* styling header section for mobile */
    @media (max-width: 640px) {
      text-align: left;
      margin: 1.5rem;

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

  /* animating the scroll indicator */
  /* you can't nest this inside website header */
  .scrollIndicator {
    display: inline-block;
    animation: bounce 2s infinite ease-in-out;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
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

    column-gap: clamp(10px, 20px, 30px);
  }

  /* styling for horizontal scrolling */
  /* vertical scrolling moves the track sideways. */
  @supports (animation-timeline: view()) {
    .whiteBoard {
      height: auto;
    }

    .notesScrollSection {
      height: 1000vh;
      view-timeline: --horizontal block;
    }

    .notesParentWrapper {
      position: sticky;
      top: 0;
    }

    .notesScrollTrack {
      /* replacing var(--notesTotalWidth); */
      width: max-content;
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
        /* transform: translate3d(var(--mobilePan), 0, 0); */
        transform: translate3d(calc(100vw - 100%), 0, 0);
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

    /* text width */
    @media (min-width: 672px) {
      flex-direction: row;
    }

    /* to make the horizontal scrolling work */
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;

    /* for debugging */
    /* border: 2px solid #000; */
  }

  .notesContainer {
    width: 50vw;
    /* should i just instead do flex-basis: 50vw; */
    flex: 0 0 50vw; /* setting base size of each section to 50vw */
    margin: 0 auto;
    /* why is there so much space between website header and notesContainer */
    margin-top: -3rem;

    /* for debugging */
    /* border: 1px solid #000; */

    /* the color symbol by each sectionHed */
    span {
      font-size: 36px;
      vertical-align: text-top;
      padding-left: 6px;
    }

    ul {
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

    /* for mobile widths */
    @media (max-width: 672px) {
      width: 100vw;
      flex-basis: 100vw;
    }
  }

  .notesContainer.design span {
    color: var(--designFold);
  }

  .notesContainer.dataviz span {
    color: var(--datavizFold);
  }

  .notesContainer.illustration span {
    color: var(--illoFold);
  }

  /* this style applies to whichever notesContainer section is FIRST (in this case, design) */
  .notesContainer.design {
    /* to counter the 1rem margin */
    @media (max-width: 672px) {
      margin-left: -3rem;
    }
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

  /* keyboard accessibility */
  .note:active,
  .note:focus {
    /* change color based on section */
    outline: 3px dashed #000;
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
    /* object fit isn't working for some reason */
    object-fit: contain;
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
      transform: scale(1.5) translate3d(-2.5rem, -5rem, 0);
    }
    100% {
      transform: scale(1) translate3d(0, 0, 0);
    }
  }

  .fold {
    /* more seconds --> slower animation (reduce motion sickness)*/
    animation: 7.5s foldUp ease-in-out;
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

    .innerTriangle > span {
      color: #000;
      font-size: 12px;
      font-family: "jennymadeFontV2", sans-serif;
      position: absolute;
      top: -24px;
      left: 20px;
      z-index: 2; /* on top of the innerTriangle fold */
    }
  }

  /* this doesn't work when there's a default animation */
  .fold:hover,
  .fold:focus {
    transform: scale(1.5) translate3d(-2.5rem, -5rem, 0);
  }

  .footer {
    text-align: center;
    font-family: "jennymadeFontV2";
    margin: 1rem;
    font-size: 36px;
    height: 10vh;

    /* for mobile */
    @media (max-width: 640px) {
      text-align: left;
    }
  }
</style>
