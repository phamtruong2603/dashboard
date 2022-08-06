import './App.css';
import 'antd/dist/antd.min.css';
import Lecture from './components/LectureList/Lecture';
import Context from './components/Context/Context';

function App() {
  return (
    <Context>
      <div className="App">
        <Lecture />
      </div>
    </Context>
  );
}

export default App;
