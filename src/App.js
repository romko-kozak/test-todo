import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ToDoApp from './containers/ToDoApp';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <main>
          <section>
            <h1 className='app-title'>To Do List</h1>
            <ToDoApp />
          </section>
        </main>
      </div>
    </Provider>
  );
}

export default App;
