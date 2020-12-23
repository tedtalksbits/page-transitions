import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
   background: url(${({ image }) => image && image}) center;
   background-size: cover;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   /* minus height of navbar */
   margin-top: -60px;
`
const Container = styled.div`
   padding: 2rem;
   backdrop-filter: blur(5px);
   background-color: rgba(0,0,0,0.4);
   color: white;
   width: clamp(10rem, 300vw, 30rem);
   border-radius: 10px;
   h1{
      font-size: clamp(2rem, 8vw, 5rem);
      margin-bottom: 1rem;
   }
   p{
      margin-bottom: 1rem;
      font-size: clamp(.8rem, 4vw, 1.2rem);

   }
   .button{
      padding: 1rem 2rem;
      border: none;
      background:linear-gradient(90deg, #fc4447 0%,#fd448f 100% );
      font-weight: 400;
      border-radius: .2rem;
      color: white;
      font-size: 1rem;
   }
`
const Hero = ({ image, title, desc }) => {
   return (
      <div>
         <Section image={image}>
            <Container>
               <h1 className="title">{title}</h1>
               <p className="desc">{desc}</p>
               <button className="button">Learn more</button>
            </Container>

         </Section>
      </div>
   )
}
export default Hero;