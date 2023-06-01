import React from 'react';
import { createRoot } from 'react-dom/client';

import { GifExpertapp } from "./components/GifExpertApp";

import './styles/index.css';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(<GifExpertapp />);


