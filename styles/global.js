import css from "styled-jsx/css";

export default css.global`

    /* fallback */
    @font-face {
        font-family: "Material Icons";
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v70/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
            format("woff2");
        font-display: swap;
    }

    .material-icons {
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
        font-display: Arial, Helvetica;
    }

    :root {
        --shadow-ligth: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        --primary: #009cf7;
        --warning: #ffd900;
        --secondary: #00fe00;
    }
    * {
        margin: 0;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        color: #aaa;
        font-family: sans-serif;
        background-color: #0c1633;
    }
    h1 {
        font-weight: 700;
    }

    p {
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
    }

    .btn {
        border: none;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .responsive-img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    .circle {
        border-radius: 50%;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    #icon-wrapper {
        display: none;
    }
    .relative {
        position: relative;
    }

    .primary {
        background-color: var(--primary);
    }

    .secondary {
        background-color: var(--secondary);
    }

    .warning {
        background-color: var(--warning);
    }

    .mt-5-px {
        margin-top: 5px;
    }
`;
