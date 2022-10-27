import React from 'react';
import Instruction from '../../components/instruction';
import PostList from '../../components/postList';
import mockedPosts from '../../assets/mock/post';

function Exercise10() {
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useReducer)"
        description="Make Post App be able to Add / Edit / Delete with useReducer"
      />
      <PostList posts={mockedPosts} />
    </div>
  );
}

export default Exercise10;
