import React from "react";
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import ConPackage from "./componets/ConPackage";
import Works from "./componets/Works";
import ComparisonTable from "./componets/CompTab";
import FooterBar from "./componets/Footer";



export function App() {
  return (
   <>
   <Navbar></Navbar>
   <Header></Header>
   <ConPackage></ConPackage>
   <Works></Works>
   <ComparisonTable></ComparisonTable>
   <FooterBar></FooterBar>
   </>
   
  );
}
export default App;
