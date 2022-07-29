import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 1rem;
  font-family: sans-serif;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}  
body {
    text-align: center;
    margin: 0;
    margin-bottom: 0;
    color: #263238;
    position: relative;
    background-color : #d6eaf8;;
    min-height: 100vh;
    padding-bottom: 3rem;
    
  }
button, input[type="submit"] {
  border: thin solid #2ECC71;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0;
  display: inline-block;
  background-color: #2ECC71 ;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  color: #263238;
  box-shadow: 2px 2px #1D8348;
}


button:hover,input[type="submit"]:hover {
  background-color: #FF6F0080;
  border: #FF6F0080 ;
}

select {
  border: thin solid gray;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  width: 20vw;
  font-size: 1rem;
  line-height: 1;
  background-color: whitesmoke;
  cursor: pointer;
}

input[type="text"],input[type="number"]{
  border: thin solid gray;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  width: 20vw;
  font-size: 1rem;
  line-height: 1;
  background-color: whitesmoke;
  color: #263238;
}
input[type="radio"] {
  border: thin solid #dedede;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  line-height: 1;
  background-color: whitesmoke;

}

label{
  margin: 0.5rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  
}

h1 {
  font-weight: bold;
  font-size: calc(4em + 1vw);
  margin-top: 0;
  margin-left:15rem;
  margin-right: 15rem;
  letter-spacing: 3px;
  font-style: oblique;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}


p {
  font-size: 1.3rem;
}


`;

export default GlobalStyle;
