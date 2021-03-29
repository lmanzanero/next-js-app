import ReactMarkdown from "react-markdown";
import Moment from "react-moment"; 
import { fetchAPI } from "../../services/api/ArticleService";
import Layout from "../../components/Layout"
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../services/api/media";

const Article = ({ article, categories }) => { 
  const imageUrl = getStrapiMedia(article.image);   
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} /> 
      <img id="banner" src={imageUrl} />
      <div className="page"> 
        <div className="article">
          <h1 className="title">{article.title}</h1>
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.user.image && ( 
                <Image
                  image={article.user.image}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.user.username}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles"); 
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
 
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;