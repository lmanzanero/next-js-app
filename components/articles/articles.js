import React from "react";
import ArticleCard from "./article_card";

const Articles = ({ articles }) => { 
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((article, i) => {
            return (
              <ArticleCard article={article} key={`${article.slug}`} />
            );
          })}
        </div>
        <div> 
        </div>
      </div>
    </div>
  );
};

export default Articles;