import styled from "styled-components";

export const SectionHeroStyled = styled.article`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  background-image: linear-gradient(rgba(0,0,0,80%), rgba(0,0,0)), url('https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=400');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-blend-mode: darken; */
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  .containerHero {
    position: relative;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;


    h1 {
      font-size: 13rem;
      font-style: italic;
      color: #f0edede9;

      @media (max-width: 1092px) {
        font-size: 10rem;

      }

      @media (max-width: 850px) {
        font-size: 9rem;

      }

      @media (max-width: 765px) {
        font-size: 7rem;

      }

      @media (max-width: 604px) {
        font-size: 5.5rem;

      }

      @media (max-width: 481px) {
        font-size: 4rem;
      }

      @media (max-width: 360px) {
        font-size: 3rem;
      }
    }

    span {
      color: #14a5e3f8;
    }

    img {
      position: absolute;
      bottom: 0;
      width: 50px;
    }
  }


`;