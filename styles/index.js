import css from 'styled-jsx/css'

export default css`

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