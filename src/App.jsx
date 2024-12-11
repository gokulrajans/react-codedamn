import react from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import { Test } from "./components/Test";

function App() {
  var name = "Gokul";
  let letName = "Poongodi";

  function testApp() {

    name = "FunName";
    // letName = "letFunName";
    console.log(name);
    console.log(letName);
  }

  testApp();


  let jsonData = {
    id: 123,
    name: {
      name1: "Gokul",
      name2: {
        name3: "Rajan"
      }
    },
    city: "Salem"
  }
  console.log(JSON.stringify(jsonData), "Stringify");
  console.log(JSON.parse(JSON.stringify(jsonData)), "parse");

  const case1 = 2
  switch(case1) {
    case 1:
      return "20";

  }
  return (
    <>
      <Test></Test>
    </>
  );
}

export default App;
