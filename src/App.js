import './App.css';
import React, { useState } from 'react';

function AppHeader() {
  return (
    <div className='app-header'>
      Thomas Jamieson
    </div>
  )
}

function NavBar({ onItemClick }) {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-cell'>
        <p onClick={() => onItemClick('home')}>Home</p>
      </div>
      <div className='nav-bar-cell'>
        <p onClick={() => onItemClick('projects')}>Projects</p>
      </div>
    </div>
  )
}

function HomeBody() {
  return (
    <div className='page-body'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

function ProjectsBody() {
  return (
    <div className='page-body'>
      <p>
        Projects text
      </p>
    </div>
  )
}

function ProjectCell({num}) {
  return (
    <div className='project-div'>
      <div className="project-title">
        <p>Project {num}</p>
      </div>
      <div className='project-description'>
        <p>Project description</p>
      </div>
    </div>
  )
}

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  let content;
  switch (activeItem) {
    case 'home':
      content = <HomeBody />;
      break;
    case 'projects':
      content = <ProjectsBody />;
      break;
    default:
      content = <HomeBody />;
  }
  
  document.title = "Thomas Jamieson";
  return (
    <div className='App'>
      <div className='blank-div'></div>
      <AppHeader />
      <NavBar onItemClick={handleItemClick}/>
      {content}
    </div>
  );
}

export default App;
