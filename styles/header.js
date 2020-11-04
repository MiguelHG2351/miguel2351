import css from 'styled-jsx/css'

export default css`

    /* Header site, global  */

    .header-site {
        box-shadow: var(--shadow-ligth);
        padding: 12px;
    }

    .container-header {
        width: 95%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .nav-button {
        display: flex;
        align-items: center;
        flex-grow: 2;
    }

    .nav-button button {
        color: #000;
        background-color: transparent;
        font-size: 18px;
    }

    .nav-button button i {
        font-size: 1.5em;
    }

    .name {
        position: relative;
    }

    .name a {
        color: #000;
        text-decoration: none;
    }

    .options-user {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        padding: 12px;
        z-index: 2;
        background-color: #09f;
        left: 0;
        right: 0;
        height: 150px;
        background-color: #fff;
        box-shadow: var(--shadow-ligth);
    }

    .btn-set-mode {
        padding: 14px 6px;
        position: relative;
        border: none;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        transition: transform 0.2s ease-in;
    }
    
    .btn-set-mode:hover {
        transform: scale(0.9);
    }

    .btn-set-mode:hover::after {
        padding: 16px;
        top: 8.2px;
        left: 6px;
        position: absolute;
        z-index: 5;
    }

    .btn-set-mode::after {
        transition: all 0.2s ease-in;
        content: '';
        padding: 18px;
        top: 8px;
        left: 8px;
        position: absolute;
        background-color: #fff;
        z-index: 5;
        border-radius: 50%;
    }

    @media screen and (prefers-color-scheme: ligth) {

        .btn-set-mode {
            box-shadow: var(--shadow-ligth);
            background-color: #fff;
        }

    }

    @media screen and (prefers-color-scheme: dark) {

        .btn-set-mode {
            background-color: #ff0;
            box-shadow: var(--shadow-ligth);
        }

    }


    /* Sidenav, reponsive design */

    .sidenav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: #fff;
        overflow: hidden;
        transition: width ease 0.75s;
        height: 100%;
        width: 0;
    }

    .sidenav.active {
        display: block;
        width: 80%;
    }

    .profile {
        position: relative;
        margin-bottom: 12px;
        height: auto;
        overflow: hidden;
    }

    .background {
        overflow: hidden;
        position: absolute;
        z-index: -1;
        inset: 0px  ;
        height: auto;
    }

    .user-info {
        padding: 32px 32px 12px;
    }

    .user-info > a {
        font-size: 12px;
        color: #fff;
        display: block;
    }

    .avatar img {
        width: 30%;
    }

    .list-menu a {
        padding: 12px 8px;
        display: flex;
        transition: all ease 0.25s;
        align-items: center;
        color: #000;
        font-size: 14px;
    }

    .list-menu a:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .list-menu a i {
        margin-right: 12px;
        font-size: 18px;
    }

    /* Overlay the menu */

    .overlay {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 9;
    }

    .overlay.active {
        display: block;
    }


`