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

    .principal {
        cursor: pointer;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .tech, .project {
        color: #fff;
    }
/* 
    .principal {
        height: 250px;
        background-image: url(/images/tech2.png);
        background-size: 250px;
        background-size: cover;
        background-repeat: no-repeat;
    } */

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }

`