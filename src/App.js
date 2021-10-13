import 'antd/dist/antd.dark.less'
import './App.less'

import Header from './components/Header'
import Chart from './components/Chart'

function App() {
  return (
    <div className="App">
      <Header/>
      <Chart/>
    </div>
  );
}

export default App;
