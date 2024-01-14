import { useEffect, useState } from "react";
import NewSingle from "./NewSingle";

const News = ({ news }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/${news.type}?${news.query}&apiKey=${process.env.REACT_APP_API}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsItems(data.articles))
      .catch((error) => console.log(error));
  }, [news.type, news.query]);

  return (
    <div className="row">
      {newsItems.map((item) => (
        <NewSingle key={item.url} item={item} />
      ))}
    </div>
  );
};

export default News;
