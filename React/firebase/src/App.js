import './App.css';
import { dbService, storageService } from './firebase.config';

function App() {
    console.dir(dbService);
    return (
        <div className='App'>
            <h1>안녕</h1>
        </div>
    );
}

export default App;