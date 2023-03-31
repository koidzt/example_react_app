import React, { useState } from 'react';
import './index.css';

function PostList(props) {
  const [postLists, setPostLists] = useState(props.posts);

  const onDelete = (id) => () => {
    setPostLists(postLists.filter((post) => post.id !== id));
  };
  return (
    <div className="post-list">
      {postLists.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
            onDelete={onDelete(post.id)}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  const { title, author, onDelete } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(props.description);

  const onEdit = () => {
    setIsEdit(true);
  };
  const onDone = () => {
    setIsEdit(false);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div className="post">
      <h1 className="post-title">{title}</h1>
      {isEdit ? (
        <textarea value={description} style={{ width: '100%' }} onChange={handleChangeDescription} />
      ) : (
        <p className="post-description">{description}</p>
      )}
      <p className="post-author">Author: {author}</p>
      <ActionMenu onEdit={onEdit} onDelete={onDelete} isEdit={isEdit} onDone={onDone} />
    </div>
  );
}

function ActionMenu(props) {
  const { isEdit, onEdit, onDone, onDelete } = props;

  return (
    <div className="post-actions">
      <span className="post-user">You are ...</span>
      {isEdit ? (
        <button className="button post-edit-action-button" onClick={onDone}>
          Done
        </button>
      ) : (
        <button className="button post-edit-action-button" onClick={onEdit}>
          Edit
        </button>
      )}
      <button className="button post-delete-action-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default PostList;
