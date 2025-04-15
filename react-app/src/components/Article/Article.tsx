import React from 'react';
import './Article.css';

interface ArticleProps {
  title: string;
  content: string;
  imageSrc: string;
  linkText: string;
  linkHref: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, imageSrc, linkText, linkHref }) => {
  return (
    <article className="articles bb">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
        {/* SVG content here */}
      </svg>
      <div className="container">
        <figure className="pad10-00000">
          <img src={imageSrc} alt={title} className="profile-pic" />
          <figcaption></figcaption>
        </figure>
        <div>
          <h2 className="purpleBoxHeading">{title}</h2>
          <p className="content trimmed-paragraph purpleBoxText purpleBox" style={{ paddingBottom: '70px' }}>
            {content}
            <a href={linkHref} className="asBlock floatR btnPad1L2T">{linkText}</a>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;
