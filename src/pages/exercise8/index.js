import React from 'react';
import Instruction from '../../components/instruction';
import PostList from '../../components/postList';
import mockedPosts from '../../assets/mock/post';

function Exercise8() {
  return (
    <div className="page-container">
      <Instruction topic="Posts App Theme" description="Change theme of posts app with Context API" />
      <PostList posts={mockedPosts} />
    </div>
  );
}

export default Exercise8;
