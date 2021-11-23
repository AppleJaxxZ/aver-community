import React from 'react';
import './App.css';
import Layout from './components/layout/layout.jsx'
import LoginForm from './components/login-form/login-form.component.jsx'
import Header from './components/heading/heading.component.jsx'

function App() {
  return (
    <div className="App">
      
        <Layout>
        <Header />
        <LoginForm />
      </Layout>
      
    </div>
  );
}

export default App;
