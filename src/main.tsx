import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoryProvider } from './app/StoryProvider';
import { App } from './app/App';
import './styles/style.css';
import './styles/paper-stage.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><StoryProvider><App/></StoryProvider></React.StrictMode>);
