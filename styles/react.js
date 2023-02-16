import css from "styled-jsx/css";

export const styles = css`
  @media screen and (min-width: 996px) {
    .project {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px 50px;
    }
  }
`;
