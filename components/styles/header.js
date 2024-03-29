import css from "styled-jsx/css"

export default css`
  /* Header site, global  */

  .name {
    position: relative;
    color: #eee;
    text-decoration: none;
  }

  .name img {
    vertical-align: middle;
  }

  .options-user {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    z-index: 2;
    background-color: #09f;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: var(--shadow-ligth);
    transition: all ease 0.2s;
    height: 0;
    overflow: hidden;
  }

  .options-user.active {
    height: 150px;
  }

  .btn-set-mode {
    padding: 14px 6px;
    position: relative;
    border: none;
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    transition: transform 0.2s ease-in;
    margin: 0 auto;
    margin-top: 12px;
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
    content: "";
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
    left: unset;
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow: hidden;
    transition: transform ease 0.45s, width ease 0.45s;
    width: 0;
    overflow-y: auto;
    transform: translateX(100%);
  }

  .sidenav.active {
    display: block;
    transform: translateX(0);
    width: 80%;
    transition: transform ease 0.45s;
  }

  .sidenav::-webkit-scrollbar {
    width: 0px;
  }

  .profile {
    position: relative;
    height: auto;
    overflow: hidden;
  }

  .background {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    inset: 0px;
    height: auto;
    background-image: url(/images/background.webp);
    background-size: cover;
    background-repeat: repeat;
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

  .list-menu a i {
    margin-right: 12px;
    font-size: 22px;
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

  @media screen and (min-width: 768px) {
    .sidenav {
      position: static;
      display: block;
      width: auto;
      background: none;
      transform: none;
    }

    .user {
      display: none;
    }
  }
`
