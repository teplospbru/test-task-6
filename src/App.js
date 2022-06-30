import './App.css';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Counter from './components/Counter';
import Timer from './components/Timer';
import { addWidget } from './redux/actions';

function App() {
  const { widgets } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Test Task: Counters and Timers</h1>
      <main>
        {/* Список виджетов */}
        { widgets.length > 0 && (
            widgets.map(({ id, type, count }) => type === 'counter' 
              ? <Counter id={ id } count={ count } key={ id.toString() + "_1" }/> 
              : <Timer id={ id } count={ count } key={ id.toString() + "_2" }/>
            )
          )
        }
        <div className="widget" onClick={ () => dispatch(addWidget()) } data-testid="add">
          <div className="add btn-success">
            <span>Add</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
