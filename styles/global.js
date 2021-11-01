import css from "styled-jsx/css";

export default css.global`

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
        --color-dark-mode: #eee;
    }
    * {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
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

    .container {
        width: 90%;
        margin: 0 auto;
    }

    .btn {
        border: none;
        outline: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        padding: 0;
        background-color: transparent;
    }

    .responsive-img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    .circle {
        border-radius: 50%;
    }
    
    .spacing-container {
        width: 90%;
        margin: 0 auto;
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

    .btn-primary {
        padding: 8px 25px;
        border: none;
        border-radius: 6px;
        background-color: #009cf7;
        color: #eee;
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
