import css from 'styled-jsx/css'

export default css`

    .description {
        margin-top: 40px;
    }

    .profile-me {
        text-align: center;
        width: 90%;
        margin: auto;
        color: #eee;
        animation-name: fade-in;
        animation-duration: 0.5s;
        animation-timing-function: ease;
        animation-fill-mode: both;
    }

    .bar-content {
        position: relative;
        height: 250px;
        width: 90%;
        margin: 0 auto;
        --primary-color: #d87211;
        --secondary-color: #e91e63;
        --tertiary-color: #9c27b0;
    }

    .bar-content::before {
        content: '';
        position: absolute;
        left: 20px;
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
        --secondary-color: linear-gradient(to bottom, #d87211, #e91e63, #9c27b0);
        content: '';
        position: absolute;
        left: unset;
        right: 20px;
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

    .profile-me h1 {
        letter-spacing: -0.42px;
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
            width: 90%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px 50px;
        }
    }

`