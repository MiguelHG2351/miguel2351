import css from 'styled-jsx/css'

export default css.global`
    :root {
     --shadow-ligth: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);  
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

`