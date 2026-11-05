<script lang="ts">
  /* add one or two more categories (e.g. on camera) if needed*/
  type Category = "design" | "dataviz" | "illustration " | "research";

  type Note = {
    id: string;
    image?: string;
    alt: string;
    title?: string;
    description?: string;
  };

  type Props = {
    note: Note;
    category: Category;
    activate: () => void;
  };

  let { note, category, activate }: Props = $props();
</script>

<li class="note {category}">
  <button
    class="noteContent"
    tabindex="0"
    type="button"
    aria-haspopup="dialog"
    onclick={activate}
  >
    {#if note.image}
      <img src={note.image} alt={note.alt ?? ""} />
    {/if}
  </button>

  <div class="fold {category}" aria-hidden="true">
    <div class="innerTriangle"><span>read more</span></div>
    <div class="outerTriangle"></div>
  </div>
</li>

<style>
  /* .noteContent,
  .noteHed,
  .noteDesc,
  .fold,
  .innerTriangle,
  .outerTriangle {
    display: block;
  } */

  .note {
    flex: 0 1 var(--noteWidth);
    min-width: 0;
    position: relative;
    max-height: var(--maxHeight);
    height: var(--noteHeight);
    width: var(--noteWidth);
    transform: rotate(random(-2.5deg, 2.5deg));
  }

  .noteContent:hover {
    filter: drop-shadow(-10px -10px 10px #ccc);
  }

  /* keyboard accessibility */
  .noteContent:active,
  .noteContent:focus {
    filter: drop-shadow(-10px -10px 10px #ccc);
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

  .note.research {
    background-color: var(--researchBg);

    .innerTriangle {
      border-top: calc(var(--noteHeight) * 0.2) solid var(--researchFold);
    }
  }

  .noteHed {
    font-family: "Futura PT", sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 1;
  }

  .noteContent {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    /* the -49 instead of -50% to correct for the minor bottom border */
    transform: translate(-50%, -49%);

    /* removing default button styling*/
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
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
    /* adjut this spacing */
    50% {
      transform: scale(1.5) translate3d(-40px, -80px, 0);
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
      top: -25px;
      left: 25px;
      z-index: 2; /* on top of the innerTriangle fold */
    }
  }

  /* this doesn't work when there's a default animation */
  .fold:hover,
  .fold:focus {
    transform: scale(1.5) translate3d(-2.5rem, -5rem, 0);
  }
</style>
