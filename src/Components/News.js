import { useEffect, useState } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

const News = ({ news }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://newsapi.org/v2/${news.type}?${news.query}&apiKey=${process.env.REACT_APP_API}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsItems(data.articles))
      .catch(() => {
        setError(true);
      });
  }, [news.type, news.query]);

  const renderItems = () => {
    if (!error) {
      return newsItems.map((item) => <NewSingle key={item.url} item={item} />);
    } else {
      return <Error />;
    }
  };

  return <div className="row">{renderItems()}</div>;
};

export default News;
