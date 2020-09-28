import css from "styled-jsx/css";

export default css.global`
    :root {
        --shadow-ligth: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        --primary: #009cf7;
        --warning: #ffd900;
        --secondary: #00fe00;
    }
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto";
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        color: #333;
        font-family: sans-serif;
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

    .blue-filter {
      filter: drop-shadow(0 0 0.75rem rgba(25, 25, 250, 0.9)); 
    }

    .yellow-filter {
      filter: drop-shadow(0 0 0.75rem rgb(234 255 9)); 
    }

    .green-filter {
      filter: drop-shadow(0 0 0.75rem rgb(17 229 29)); 
    }

    .mt-5-px {
        margin-top: 5px;
    }
`;
