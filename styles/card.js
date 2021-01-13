import css from "styled-jsx/css";

export const styles = css`
    .card {
        text-decoration: none;
        display: block;
        margin: 5px 0;
        border: none;
        border-radius: 8px;
        transition: all ease 0.18s;
    }

    .principal {
        cursor: pointer;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.4);
        transition: all ease 0.45s;
        transform: scale(0.7);
    }

    .card:hover {
        transform: scale(0.9);
    }

    .card:hover .principal {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .project-name {
        display: flex;
    }

    .tech,
    .project-name {
        color: #fff;
        user-select: none;
    }

    .project-name > p {
        margin-left: 5px;
    }

    @media screen and (min-width: 363px) {
        .principal {
            height: 350px;
        }
    }
`;
