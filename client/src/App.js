import './App.css';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { useEffect, useState } from 'react';

function App() {

  console.log('This is the App Component')
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch]);

  return (
    <div className="App ui grid">


      <div className="three wide column side-main grey" >
        <div className="side-block sticky">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
      
      <div className="thirteen wide black column">
        <div className="main-block">
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>






    </div>
  );
}

export default App;
