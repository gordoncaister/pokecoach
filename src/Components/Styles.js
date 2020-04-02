import styled from "styled-components"

const BgDiv = styled.div`
width: 360px;
max-height: 100vh;
margin: 0 auto;
background-color: grey;
color: white;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
`

const NavDiv = styled.div`

height: 50px;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`

export {BgDiv, NavDiv};