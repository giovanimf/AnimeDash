import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import Main from "./ui/main";
import Content from "./ui/content";
import Profile from "./components/profile";
import { Stats } from "./components/stats";
import Team from "./components/team";
import Event from "./components/event";

export function App(){

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false; 
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  function toggleSidebar (){
    setSidebarOpen(!isSidebarOpen);
  };

  function toggleDarkMode() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode)); 
  }

  return(
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
      />
      <Main>
        <Content>
          <Stats darkMode={darkMode}/>
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team/>
            <Event/>
          </div>
        </Content>
        <Profile darkMode={darkMode}/>
      </Main>
    </div>
  )
}