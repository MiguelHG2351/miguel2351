import css from 'styled-jsx/css'

export default css`

    .profile-me {
        text-align: center;
        width: 90%;
        margin: auto;
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