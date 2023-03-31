import React, { useContext } from 'react';
import Instruction from '../../components/instruction';
import mockedPosts from '../../assets/mock/post';
/* Exercise */
// import PostList from '../../components/postList';

// function Exercise10() {
//   return (
//     <div className="page-container">
//       <Instruction
//         topic="Posts App (useReducer)"
//         description="Make Post App be able to Add / Edit / Delete with useReducer"
//       />
//       <PostList posts={mockedPosts} />
//     </div>
//   );
// }

/* Answer */
import PostList from '../../components/postListE10';

const user = {
  name: 'Test',
  permission: {
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
};

export const UserContextE10 = React.createContext(user);

function Exercise10() {
  return (
    <UserContextE10.Provider value={user}>
      <div className="page-container">
        <Instruction
          topic="Posts App (useReducer)"
          description="Make Post App be able to Add / Edit / Delete with useReducer"
        />
        <PostList posts={mockedPosts} />
      </div>
    </UserContextE10.Provider>
  );
}

export default Exercise10;
