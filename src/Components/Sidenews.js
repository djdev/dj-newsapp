import { useEffect, useState } from "react";
import SingleSide from "./SingleSide";

const Sidenews = ({ news }) => {
  const [sideNews, setSideNews] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/${news.type}?${news.query}&apiKey=${process.env.REACT_APP_API}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setSideNews(data.articles))
      .catch((error) => console.log(error));
  }, [news.type, news.query]);

  return (
    <div className="row">
      {sideNews.map((item) => (
        <SingleSide key={item.url} item={item} />
      ))}
    </div>
  );
};

export default Sidenews;
