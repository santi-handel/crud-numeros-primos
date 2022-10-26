import Home from '../containers/Home';
import FirebaseContext from '../context/numContext';

function App() {
  return (
    <FirebaseContext><Home></Home></FirebaseContext>
  )
}

export default App;
