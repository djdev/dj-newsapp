import { useState } from "react";
import "./App.css";
import News from "./News";

const availableNewsOptions = {
  news1: {
    type: "top-headlines",
    query: "sources=bbc-news",
  },
  news2: {
    type: "everything",
    query: "domains=techcrunch.com&language=en",
  },
  news3: {
    type: "everything",
    query: "domains=wsj.com",
  },
};

const App = () => {
  const [newsOptions] = useState(availableNewsOptions);

  return (
    <div className="App container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              My Feed
            </a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s8">
          <News news={newsOptions.news1} />
          <News news={newsOptions.news2} />
        </div>
      </div>
    </div>
  );
};

export default App;
