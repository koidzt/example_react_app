import React, { useContext } from 'react';
import { ThemeContext } from '../../pages/exercise8';
import './index.css';

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => {
        return <Post key={post.id} title={post.title} description={post.description} author={post.author} />;
      })}
    </div>
  );
}

function Post(props) {
  const { title, description, author } = props;
  const theme = useContext(ThemeContext);

  return (
    <div className={`post`} style={{ backgroundColor: theme.backgroundColor }}>
      <h1 className={`post-title`} style={{ color: theme.color }}>
        {title}
      </h1>
      <p className={`post-description`} style={{ color: theme.color }}>
        {description}
      </p>
      <p className={`post-author`} style={{ color: theme.color }}>
        Author: {author}
      </p>
      <ActionMenu />
    </div>
  );
}

function ActionMenu() {
  const theme = useContext(ThemeContext);

  return (
    <div className="post-actions">
      <span className={`post-user`} style={{ color: theme.color }}>
        You are ...
      </span>
      <button className={`button post-edit-action-button`} style={{ ...theme.button }}>
        Edit
      </button>
      <button className={`button post-delete-action-button`} style={{ ...theme.button }}>
        Delete
      </button>
    </div>
  );
}

export default PostList;
