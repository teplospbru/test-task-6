import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';
import userEvent from '@testing-library/user-event';

const render = component => rtlRender(
  <Provider store={ Store }>
      { component }
  </Provider>
)

describe('App', () => {
    it('renders H1', () => {
    render(<App />);
  
    expect(screen.getByText('Test Task: Counters and Timers')).toBeInTheDocument();
  });
  it('renders counter widget by click \'add\'', () => {
    render(<App />);
    const add = screen.getByText('Add');

    userEvent.click(add);
    expect(screen.queryByTestId('add')).toBeInTheDocument();
  })
  it('renders initial value for first counter is equal to null', () => {
    render(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
  })
  it('increments counter by click on \'plus\'', () => {
    render(<App />);
    const plus = screen.getByTestId('1_plus');

    userEvent.click(plus);
    userEvent.click(plus);
    expect(screen.getByTestId('1_span').innerHTML).toBe('2');
  });
  it('decrements counter by click on \'minus\'', () => {
    render(<App />);
    const plus = screen.getByTestId('1_minus');

    userEvent.click(plus);
    expect(screen.getByTestId('1_span').innerHTML).toBe('1'); // На счётчике 2
  })
  it('renders next counter with summary value of previous', () => {
    render(<App />);
    const add = screen.getByText('Add');
    const plus = screen.getByTestId('1_plus');

    userEvent.click(plus); // Увеличиваем первый счётчик  на единицу
    expect(screen.getByTestId('1_span').innerHTML).toBe('2'); // показывает 2
    userEvent.click(add); // Добавляем счётчик
    expect(screen.getByTestId('2_span').innerHTML).toBe('2'); // на нём 2
  })
  it('delete counter from screen', () => {
    render(<App />);
    const del = screen.getByTestId('1_delete');

    userEvent.click(del);
    expect(screen.queryByTestId('1_counter')).not.toBeInTheDocument();
  })
  it('renders timer', () => {
    render(<App />);
    const add = screen.getByTestId('add');

    userEvent.click(add);
    userEvent.click(add);
    expect(screen.queryByTestId('4_timer')).toBeInTheDocument();
  })
})
