import React, { useState } from 'react';
import Instruction from '../../components/instruction';
import mockedPosts from '../../assets/mock/post';
/* Exercise */
// import PostList from '../../components/postList';

// function Exercise8() {
//   return (
//     <div className="page-container">
//       <Instruction topic="Posts App Theme" description="Change theme of posts app with Context API" />
//       <PostList posts={mockedPosts} />
//     </div>
//   );
// }

/* Answer */
import PostList from '../../components/postListE8';

const theme = {
  main: {
    color: 'var(--main-branding-color-500)',
    backgroundColor: 'background-color: var(--main-branding-color-200)',
    button: {},
  },
  second: {
    color: 'var(--second-branding-color-500)',
    backgroundColor: 'var(--second-branding-color-200)',
    button: {
      backgroundColor: 'var(--second-branding-color-500)',
      border: '1px solid var(--second-branding-color-300)',
    },
  },
};

export const ThemeContext = React.createContext(theme.main);

function Exercise8() {
  const [toggle, setToggle] = useState(true);

  const handleClickToggleTheme = () => {
    setToggle((pre) => !pre);
  };

  return (
    <ThemeContext.Provider value={toggle ? theme.main : theme.second}>
      <div className="page-container">
        <Instruction topic="Posts App Theme" description="Change theme of posts app with Context API" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className={`button`}
            style={toggle ? theme.main.button : theme.second.button}
            onClick={handleClickToggleTheme}
          >
            Toggle Theme
          </button>
        </div>
        <PostList posts={mockedPosts} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Exercise8;
