import styled from "styled-components";

export const ContainerSelector = styled.div`
  padding: 5rem 0rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 417px) {
    padding: 4rem 1rem;
  }
  
  #demo-simple-select {
    outline: 1px solid;
    
    font-weight: 800;

    &:focus {
      outline: none;
    }

  }
  
`;