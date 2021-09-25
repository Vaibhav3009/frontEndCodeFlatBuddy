import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";
import Routes from './routes';
import Navbar from './components/Navbar';
function App() {
  
  
  return (
    <Provider store={store}>
      <div>
      <Navbar />
     <BrowserRouter>
          <Routes />
        </BrowserRouter>
       </div>
      </Provider>
  );
}


export default App;
