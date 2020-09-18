import css from 'styled-jsx/css'

export default css`
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

    .sidenav {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: #fff;
        /* width: 80%; */
        overflow: hidden;
        transition: all ease 0.75s;
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

    .menu li {
        padding: 12px 8px;
        transition: all ease 0.25s;
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .menu li:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .menu li i {
        margin-right: 12px;
        font-size: 18px;
    }

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