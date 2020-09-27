import css from 'styled-jsx/css'

export const styles = css`

.card {
        text-decoration: none;
        display: block;
        margin: 52px 0;
        border: none;
        border-radius: 8px;
}

.principal {
        cursor: pointer;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 3px #000;
}

.principal:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: scale(0.9);
        transition: all ease 0.45s;
        box-shadow: 0 0 3px #000;
}

.background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
}

.project-name {
        display: flex;
}

.tech, .project-name {
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

`