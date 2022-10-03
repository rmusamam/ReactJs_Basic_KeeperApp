import React from "react";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import notes from "./noteContent";

function noteCards(data){
  return (<Note 
  title={data.title}
  content={data.content} 
  />)
}


function App() {
  return (
    <div>
      <Header />
      {/* console.log(notes) */}
      {notes.map(noteCards)}
      <Footer />
    </div>
  );
}
export default App;
