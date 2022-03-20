import { Link } from "gatsby";
import React from "react";

const BlogCard = ({ blog }) => {
  const { title, slug, excerpt } = blog.frontmatter;

  return (
    <Link to={slug}>
      <div className="dark:shadow-dark-lg hover:dark:shadow-dark-sm border-1 flex h-full flex-1 flex-col rounded-lg border-transparent p-8 shadow-lg transition duration-200 hover:border-gray-900 hover:shadow-sm dark:hover:border-gray-200">
        <h2 className="my-4 text-xl font-semibold leading-5 ">
          {title.toUpperCase()}
        </h2>
        <p className="text-sm">{excerpt.substr(0, 65)}...</p>
      </div>
    </Link>
  );
};

export default BlogCard;
