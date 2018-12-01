import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => (
  <div>
    <Clock />
    <Tabs array={[{title: 'one', content: 'world'}, {title: 'two', content: 'content2'}]} />
  </div>
);

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root />,root);
});
