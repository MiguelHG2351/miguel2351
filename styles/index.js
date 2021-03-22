import css from 'styled-jsx/css'

export default css`

    .description {
        margin-top: 40px;
    }

    /* .hero {
        width: 90%;
        margin: 0 auto;
    } */

    .hero__image {
        width: 90%;
        margin: auto;
        animation-name: fade-in;
        animation-duration: 0.5s;
        animation-timing-function: ease;
        animation-fill-mode: both;
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
        content: '';
        position: absolute;
        left: 0px;
        top: 0;
        bottom: 0;
        width: 4px;
        background-image: linear-gradient(to bottom, var(--primary-color), var(--secondary-color), var(--tertiary-color));
        transition: background 0.2s ease-in;
        animation-name: changeGradient;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        background-repeat: no-repeat;
        animation-fill-mode: both;
    }

    .bar-content::after {
        content: '';
        position: absolute;
        left: unset;
        right: 0px;
        top: 0;
        bottom: 0;
        width: 4px;
        background-image: linear-gradient(to bottom, var(--tertiary-color), var(--secondary-color), var(--primary-color));
        transition: background 0.2s ease-in;
        animation-name: changeGradient;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        background-repeat: no-repeat;
        animation-fill-mode: both;
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

    .hero__content h1 {
        letter-spacing: -0.42px;
    }

    .project-principal {
        color: var(--color-dark-mode);
    }

    .bubble-wrapper {
        position: relative;
    }
    
    .bubble-draw {
        position: absolute;
        top: 20px;
        left: 50px;
        z-index: -1;
        transition: transform 0.2s ease;
        animation-name: jump-bubble;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        opacity: .9;
    }

    @keyframes jump-bubble {
        0% {
            transform: translate(1.5px, 1.5px);
        }
        
        25% {
            opacity: .6;
            transform: translate(-1.5px, 1.5px);
        }

        50% {
            transform: translate(-1.5px, 1.5px);
        }

        75% {
            transform: translate(-1.5px, 1.5px);
            opacity: .9;
        }

        100% {
            transform: translate(1.5px, 1.5px);
            opacity: 1;
        }
    }

    .arrow-down-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .arrow-down {
        width: 84px;
    }

    .project {
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
        .project {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px 50px;
        }
    }

`