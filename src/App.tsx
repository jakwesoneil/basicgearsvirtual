// src/App.tsx
import React from 'react';
import Task from "./components/Task";
import NavBar from './components/NavBar'; // Import the Navbar component
import './index.css'

const App: React.FC = () => {
  return (
    <div>
      <NavBar /> {/* Render the Navbar component */}
      <div className="container" style={{ paddingTop: '70px' }}> {/* Apply padding to the main content area */}
        <Task
          title="Task 1"
          content={
            <>
              <p>Introduction</p>
              <p>Understanding the behaviours, objectives and methodologies of a cyber threat is a vital step to establishing a strong cybersecurity defence (known as a cybersecurity posture).</p>
              <p>In this room, you will be introduced to the UKC (Unified Kill Chain) framework that is used to help understand how cyber attacks occur.</p>
              <p><b>Learning Objectives:</b></p>
              <ul>
                <li>Understanding why frameworks such as the UKC are important and helpful in establishing a good cybersecurity posture</li>
                <li>Using the UKC to understand an attacker's motivation, methodologies and tactics</li>
                <li>Understanding the various phases of the UKC</li>
                <li>Discover that the UKC is a framework that is used to complement other frameworks such as MITRE.</li>
              </ul>
            </>
          }
        />
        
        <Task
          title="Task 2"
          content={
            <>
              <p>Introduction</p>
              <p>Understanding the behaviours, objectives and methodologies of a cyber threat is a vital step to establishing a strong cybersecurity defence (known as a cybersecurity posture).</p>
              <p>In this room, you will be introduced to the UKC (Unified Kill Chain) framework that is used to help understand how cyber attacks occur.</p>
              <p><b>Learning Objectives:</b></p>
              <ul>
                <li>Understanding why frameworks such as the UKC are important and helpful in establishing a good cybersecurity posture</li>
                <li>Using the UKC to understand an attacker's motivation, methodologies and tactics</li>
                <li>Understanding the various phases of the UKC</li>
                <li>Discover that the UKC is a framework that is used to complement other frameworks such as MITRE.</li>
              </ul>
            </>
          }
        />
        <Task
          title="Task 1"
          content={
            <>
              <p>Introduction</p>
              <p>Understanding the behaviours, objectives and methodologies of a cyber threat is a vital step to establishing a strong cybersecurity defence (known as a cybersecurity posture).</p>
              <p>In this room, you will be introduced to the UKC (Unified Kill Chain) framework that is used to help understand how cyber attacks occur.</p>
              <p><b>Learning Objectives:</b></p>
              <ul>
                <li>Understanding why frameworks such as the UKC are important and helpful in establishing a good cybersecurity posture</li>
                <li>Using the UKC to understand an attacker's motivation, methodologies and tactics</li>
                <li>Understanding the various phases of the UKC</li>
                <li>Discover that the UKC is a framework that is used to complement other frameworks such as MITRE.</li>
              </ul>
            </>
          }
        />
        <Task
          title="Task 1"
          content={
            <>
              <p>Introduction</p>
              <p>Understanding the behaviours, objectives and methodologies of a cyber threat is a vital step to establishing a strong cybersecurity defence (known as a cybersecurity posture).</p>
              <p>In this room, you will be introduced to the UKC (Unified Kill Chain) framework that is used to help understand how cyber attacks occur.</p>
              <p><b>Learning Objectives:</b></p>
              <ul>
                <li>Understanding why frameworks such as the UKC are important and helpful in establishing a good cybersecurity posture</li>
                <li>Using the UKC to understand an attacker's motivation, methodologies and tactics</li>
                <li>Understanding the various phases of the UKC</li>
                <li>Discover that the UKC is a framework that is used to complement other frameworks such as MITRE.</li>
              </ul>
            </>
          }
        />
        <Task
          title="Task 1"
          content={
            <>
              <p>Introduction</p>
              <p>Understanding the behaviours, objectives and methodologies of a cyber threat is a vital step to establishing a strong cybersecurity defence (known as a cybersecurity posture).</p>
              <p>In this room, you will be introduced to the UKC (Unified Kill Chain) framework that is used to help understand how cyber attacks occur.</p>
              <p><b>Learning Objectives:</b></p>
              <ul>
                <li>Understanding why frameworks such as the UKC are important and helpful in establishing a good cybersecurity posture</li>
                <li>Using the UKC to understand an attacker's motivation, methodologies and tactics</li>
                <li>Understanding the various phases of the UKC</li>
                <li>Discover that the UKC is a framework that is used to complement other frameworks such as MITRE.</li>
              </ul>
            </>
          }
        />
        
      </div>
    </div>
  );
};

export default App;
