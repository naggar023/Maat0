import React from 'react';

interface PostProps {
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ title, content, author, timestamp }) => {
  return (
    <div className="max-w-xl my-10 mx-auto bg-post shadow-md hover:shadow-xl rounded-lg overflow-hidden cursor-pointer">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-post-title">{title}</h2>
        <p className="text-post-content mt-2">{content}</p>
      </div>
      <div className=" bg-post p-4">
        <div className="flex items-center justify-between text-post-description">
          <span className="font-medium">By {author}</span>
          <span className="text-sm">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
