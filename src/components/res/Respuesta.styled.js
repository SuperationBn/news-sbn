import styled from "styled-components";

export const SectionRespuestasStyled = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .gridNoticias {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    /* gap: 1rem; */
    place-items: center;

    @media (max-width: 350px) {
      padding: 0.4rem;
      grid-template-columns: 1fr;
    }

    .cardContainer {
      margin: 1rem;
      box-shadow: 0px 4px 10px rgba(0,0,0,15%);
      
      &:hover {
        box-shadow: 0px 6px 10px rgba(0,0,0,25%);
      }


      @media (max-width: 350px) {
        width: 100%;
      }

      .descriptionLineas {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-clamp: 3;
        overflow: hidden;
      }

      span {
        color: #ffffffed;
      }
      
      p {
        color: #ffffffbd;
        font-weight: 600;
      }

      a {
        letter-spacing: 1.5px !important;
        font-size: 0.6rem !important;
        color: aliceblue;
        font-weight: 600 !important;
      }
    }
  }

`;