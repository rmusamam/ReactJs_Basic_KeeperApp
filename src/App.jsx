import React from "react";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import notes from "./noteContent";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div>
        {notes.map(function noteCards(data) {
          return <Note title={data.title} content={data.content} />;
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default App;
