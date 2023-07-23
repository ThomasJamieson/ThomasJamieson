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


function ProjectsBody({showAllCells}) {
  const[selected, setSelected] = useState(-1);
  const [cellVisibility, setCellVisibility] = useState(Array(9).fill(true));
  
  const handleCellClick = (cellId) => {
    if (cellId == selected) {
      setSelected(-1);
    }
    else {
      setSelected(cellId);
    }
  };

  var cellData = [0,1,2,3,4,5,6,7,8,19];
  var visibleCells;
  if (selected == -1) {
    visibleCells = [<ProjectCell cellId={cellData[0]} onItemClick={handleCellClick}/>,<ProjectCell cellId={cellData[1]} onItemClick={handleCellClick}/>,
                    <ProjectCell cellId={cellData[2]} onItemClick={handleCellClick}/>,<ProjectCell cellId={cellData[3]} onItemClick={handleCellClick}/>,
                    <ProjectCell cellId={cellData[4]} onItemClick={handleCellClick}/>,<ProjectCell cellId={cellData[5]} onItemClick={handleCellClick}/>,
                    <ProjectCell cellId={cellData[6]} onItemClick={handleCellClick}/>,<ProjectCell cellId={cellData[7]} onItemClick={handleCellClick}/>,
                    <ProjectCell cellId={cellData[8]} onItemClick={handleCellClick}/>];
  }
  else {
    visibleCells = <ProjectCell cellId={cellData[selected]} description={"Description for project blah blah blah"} onItemClick={handleCellClick}/>;
  }

  if (selected == -1) {
    return (
      <ProjectGrid visibleCells={visibleCells} />
    )
  }
  else {
    return (
      <ProjectSingle visibleCells={visibleCells} />
    )
  }
}

function ProjectGrid({visibleCells}) {
  return (
    <div className='page-body project-div-grid'>
      {visibleCells}
    </div>
  )
}

function ProjectSingle({visibleCells}) {
  return (
    <div className='page-body'>
      {visibleCells}
    </div>
  )
}

function ProjectCell({cellId, description, onItemClick}) {
  const [text, setText] = useState(cellId+1);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='project-cell' onClick={() => onItemClick(cellId)}>
      <p>Project {text}</p>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  let content;
  switch (activeItem) {
    case 'home':
      content = <HomeBody />;
      break;
    case 'projects':;
      content = <ProjectsBody showAllCells={false}/>;
      break;
    default:
      content = <HomeBody />;
  }
  
  document.title = "Thomas Jamieson";
  return (
    <div className='App'>
      <div className='blank-div'></div>
      <AppHeader />
      <NavBar onItemClick={handleNavClick}/>
      {content}
    </div>
  );
}

export default App;
