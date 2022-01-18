import './App.css';

import { MyChart } from './Chart';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function App() {
    return (
        <div className='App' style={{ width: '100vw', height: '100vh' }}>
            <MyChart />
        </div>
    );
}

export default App;
