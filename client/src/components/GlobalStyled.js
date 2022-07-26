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
    padding: 0;
    color: #444
  }
button, input[type="submit"] {
  border: thin solid #444;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0;
  display: inline-block;
  background-color: #eee;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  color: #444
}


button:hover,input[type="submit"]:hover {
  background-color: #444;
  color:#eee;
}

select {
  border: thin solid #dedede;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  width: 20vw;
  color: #444;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
  cursor: pointer;
}

input[type="text"],input[type="number"]{
  border: thin solid #dedede;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  width: 20vw;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
}
input[type="radio"] {
  border: thin solid #dedede;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  line-height: 1;
  background-color: transparent;

}

label{
  margin: 0.5rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  
}


`;

export default GlobalStyle;
