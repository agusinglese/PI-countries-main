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
    background-color: #005f73;
    min-height: 100vh;
    padding-bottom: 3rem;
  }

button, input[type="submit"] {
  border: thin solid #f8e16c;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0;
  display: inline-block;
  background-color: #f8e16c;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  color: #263238;
  box-shadow: 1px 1px 1px 1px #B39E32;

}


button:hover,input[type="submit"]:hover {
  background-color: #B39E32;
  border: #ca6702 ;

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

  @media only screen and (max-width: 575px) {
    width: 70vw;
  }
  
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

  @media only screen and (max-width: 575px) {
    width: 70vw;
  }
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
  font-size: 5rem;
  margin-top: 5rem;
  margin-left:15rem;
  margin-right: 15rem;
  letter-spacing: 3px;
  font-style: oblique;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
  @media only screen and (max-width: 575px) {
    font-size: 2.5rem;
    margin-top: 8rem;
    margin-left: 0;
    margin-right:0;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 4rem;
    margin-top: 9rem;
    margin-left: 0;
    margin-right:0;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 6rem;
    margin-top: 12rem;
    margin-left: 0;
    margin-right:0;
  } ;

}

legend{
  padding: 0.5rem 0;
  margin: 0 0 0.5rem 0;
  display: inline-block;
  font-weight: bold;
  line-height: 1;}


p {
  font-size: 1.3rem;
}


`;

export default GlobalStyle;
