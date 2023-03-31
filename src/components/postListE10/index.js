import React, { useContext, useReducer, useState } from 'react';
import './index.css';
import { UserContextE10 } from '../../pages/exercise10';

function init(initialPosts) {
  return { posts: initialPosts };
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { posts: [...state.posts, action.payload] };
    case 'edit':
      const indexTargetPost = state.posts.findIndex((post) => post.id);
      const newPosts = state.posts.map((post) => ({ ...post }));
      newPosts[indexTargetPost] = { ...action.payload };
      return { posts: newPosts };
    case 'delete':
      return { posts: state.posts.filter((post) => post.id !== action.payload) };
    default:
      throw new Error();
  }
}

function PostList(props) {
  const initialPosts = props.posts.map((post) => ({ ...post, editor: '' }));
  const [state, dispatch] = useReducer(reducer, init(initialPosts));

  const submitEdit = (payload) => {
    dispatch({ type: 'edit', payload: payload });
  };

  const onDelete = (id) => () => {
    dispatch({ type: 'delete', payload: id });
  };
  return (
    <div className="post-list">
      {state.posts.map((post) => {
        return <Post key={post.id} post={post} submitEdit={submitEdit} onDelete={onDelete(post.id)} />;
      })}
    </div>
  );
}

function Post(props) {
  const user = useContext(UserContextE10);
  const { onDelete, submitEdit, post } = props;
  const { title, description, author } = post;

  const [isEdit, setIsEdit] = useState(false);
  const [editDescription, setEditDescription] = useState(description);

  const onEdit = () => {
    setIsEdit(true);
  };

  const onDone = () => {
    const newPost = { ...props.post, description: editDescription, editor: user.name };
    submitEdit(newPost);
    setIsEdit(false);
  };

  const handleChangeDescription = (event) => {
    setEditDescription(event.target.value);
  };
  return (
    <div className="post">
      <h1 className="post-title">{title}</h1>
      {isEdit ? (
        <textarea value={editDescription} style={{ width: '100%' }} onChange={handleChangeDescription} />
      ) : (
        <p className="post-description">{editDescription}</p>
      )}
      <p className="post-author">Author: {author}</p>
      {post.editor && <p className="post-author">Editor: {post.editor}</p>}
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
