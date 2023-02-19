import css from "styled-jsx/css"

export default css`
  /* .hero {
        width: 90%;
        margin: 0 auto;
    } */

  .hero__header {
    width: 90%;
    margin: auto;
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  .hero__image {
    max-width: 150px;
    height: auto;
  }

  .hero__content {
    text-align: center;
    color: var(--color-dark-mode);
  }

  .bar-content {
    position: relative;
    /* --primary-color: #d87211;
        --secondary-color: #e91e63;
        --tertiary-color: #9c27b0; */
    --primary-color: #d87211;
    --secondary-color: #e91e63;
    --tertiary-color: #9c27b0;
  }

  .bar-content::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    width: 0.25rem;
    background-image: linear-gradient(
      to bottom,
      var(--primary-color),
      var(--secondary-color),
      var(--tertiary-color)
    );
    transition: background 0.2s ease-in;
    animation-name: changeGradient;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    animation-fill-mode: both;
  }

  .bar-content::after {
    content: "";
    position: absolute;
    left: unset;
    right: 0px;
    top: 0;
    bottom: 0;
    width: 0.25rem;
    background-image: linear-gradient(
      to bottom,
      var(--tertiary-color),
      var(--secondary-color),
      var(--primary-color)
    );
    transition: background 0.2s ease-in;
    animation-name: changeGradient;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    animation-fill-mode: both;
  }

  .subdata {
    display: block;
  }

  .subdata__icon {
    display: inline-block;
    vertical-align: middle;
  }

  .subdata__city {
    vertical-align: middle;
    display: inline-block;
  }

  @keyframes changeGradient {
    0% {
      --primary-color: #d87211;
      --primary-color: #e91e63;
      --primary-color: #9c27b0;
      /* background-image: var(--primary-color); */
    }

    60% {
      --primary-color: #9c27b0;
      --primary-color: #e91e63;
      --primary-color: #d87211;
    }

    100% {
      --primary-color: #d87211;
      --primary-color: #e91e63;
      --primary-color: #9c27b0;
      /* background-image: var(--primary-color); */
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(42px) scale(0.9);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .project-principal {
    color: var(--color-dark-mode);
  }

  .bubble-wrapper {
    position: relative;
  }

  .arrow-down-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .arrow-down {
    width: 84px;
  }

  .projects {
    margin-top: 56px;
  }

  .title-project {
    display: inline-block;
    background-color: #010101;
    box-shadow: -5px 2px #8bc34a;
  }

  .title-project a {
    display: inline-block;
    color: #40dfd4;
    padding: 4px 25px;
    font-size: 24px;
  }

  .description-project {
    font-size: 16px;
    font-weight: 400;
  }

  .code {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
    margin: 20px 0;
  }

  .project + .project {
    margin-bottom: 20px;
  }

  .btn.preview,
  .btn.github {
    width: 80%;
    font-size: 1rem;
    border-radius: 12px;
    padding: 12px 12px;
  }

  .btn.github {
    border: 1px solid #09f;
    background-color: #09f;
    transition: border 0.1s ease;
    color: #eee;
  }

  .btn.github:hover {
    background-color: transparent;
    color: #eee;
  }

  .btn.preview {
    border: 1px solid #eee;
    background-color: #eee;
    color: #111;
    transition: background 0.1s ease;
  }

  .btn.preview:hover {
    background-color: transparent;
    color: #eee;
  }

  .project-all {
    z-index: 2;
  }

  .iframe-container {
    margin: 35px 0;
  }

  iframe {
    max-width: 100%;
    margin: auto;
    height: 200px;
  }

  @media screen and (min-width: 996px) {
    .hero__content h1 {
      font-size: 2rem;
    }

    .project-principal h3 {
      text-align: center;
    }

    .project-all,
    .projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px 50px;
    }
  }
`
