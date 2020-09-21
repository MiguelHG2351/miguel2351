import css from "styled-jsx/css";

export default css`
    .footer {
        box-shadow: var(--shadow-ligth);
        background-image: url(/images/background-footer.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .section-footer-container {
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-content: center;
        margin-top: 8px;
        padding: 12px 5px;
    }

    .section-footer-link a {
        color: #09f;
        text-decoration: none;
        text-align: center;
        margin-left: 30%;
    }

    h2 {
        color: #09f;
        text-align: center;
    }

    .social-media {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .social-media a {
        color: #2669cd;
    }

    .social-media a i {
        margin-top: 18px;
        font-size: 32px;
    }

    .social-media a img {
        vertical-align: bottom;
    }
    
`;
