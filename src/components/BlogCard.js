import { Link } from "gatsby";
import React from "react";

const BlogCard = ({ post }) => {
  const { title, slug, excerpt } = post;

  return (
    <Link to={`/blog/${slug}`}>
      <div className="dark:shadow-dark-lg hover:dark:shadow-dark-sm flex h-full flex-1 flex-col rounded-lg p-8 shadow-lg transition duration-200 hover:shadow-sm">
        <h2 className="my-4 text-xl font-semibold leading-5 ">{title}</h2>
        <p className="font-medium">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
