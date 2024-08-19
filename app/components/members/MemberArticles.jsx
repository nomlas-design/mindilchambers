import React from 'react';
import { PortableText } from 'next-sanity';
import Link from 'next/link';

const MemberArticles = ({ articles }) => {
  const renderArticles = (articles, type) => {
    const filteredArticles = articles.filter(
      (article) => article.type === type
    );

    if (filteredArticles.length === 0) return null;

    return (
      <div className='member-articles__group'>
        <h3>{type === 'article' ? 'Articles' : 'Cases'}</h3>
        {filteredArticles.map((article) => (
          <div className='member-articles__single' key={article._id}>
            <Link
              href={
                article.upload.uploadType === 'file'
                  ? article.upload.fileUrl
                  : article.upload.url
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              {article.title}
            </Link>
            {article.description && (
              <PortableText value={article.description} />
            )}
          </div>
        ))}
      </div>
    );
  };

  if (!articles || articles.length === 0) return null;

  return (
    <div className='member-articles'>
      {renderArticles(articles, 'article')}
      {renderArticles(articles, 'case')}
    </div>
  );
};

export default MemberArticles;
