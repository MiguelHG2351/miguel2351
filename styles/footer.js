import css from "styled-jsx/css";

export default css`
    .footer {
        box-shadow: var(--shadow-ligth);
        /* background-image: url(/images/background-footer.png); */
        background-color: #03091e;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .footer-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }

    .section-footer-container {
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-content: center;
        margin-top: 8px;
        padding: 12px 5px;
        box-sizing: border-box;
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
        width: 48px;
        height: 48px;
        text-align: center
    }

    .social-media a i {
        font-size: 32px;
    }

    .social-media a img {
        vertical-align: bottom;
    }

    .iframe-container {
        overflow: hidden;
    }

        iframe {
            object-fit: cover;
            width: 100%;
        }

@media screen and (min-width: 996px) {
    iframe {
            width: 600px;
    }

}

@media screen and (max-width: 996px) {
    .footer-info {
        display: block;
    }
}
    
`;
