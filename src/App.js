import React, { Component } from 'react';
import './App.css';

const { REACT_APP_TRINITY } = process.env

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      todo: []
    };
  }
  handleChange = (event) => {
    this.setState({ inputVal: event.target.value });
  }

  delTodo = (i) => {
    this.setState({
      todo: this.state.todo.filter((todo, idx) => idx !== i)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { inputVal, todo } = this.state;
    if (inputVal && !todo.includes(inputVal)) {
      this.setState({
        todo: [...this.state.todo, this.state.inputVal],
        inputVal: ''
      });
    }
    else {
      this.setState({
        inputVal: ''
      })
    }
  }

  render() {
    let { todo } = this.state;

    return (
      <div className="main">
        <h1 className='main-heading' data-test-id="main-heading" >My ToDo</h1>
        <p data-test-id="trinity-env">{REACT_APP_TRINITY}</p>
        <div className='todo'>
          <h1 data-test-id="task-heading">Have fun and Complete below tasks </h1>
          {todo.length > 0 ? <ul className='list-unstyled' data-test-id='task-list'>
            {todo.map((todo, i) => <li data-test-id='task-item' key={i}>{todo} <span data-test-id='task-item-done' className='del-btn' onClick={this.delTodo.bind(this, i)}>x</span></li>)}
          </ul> : <p className='p' data-test-id='all-task-completed'>All Done. Take a break</p>}
        </div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input type='text' name='task' value={this.state.inputVal} onChange={this.handleChange} placeholder='what are you planning to do' />
          <button data-test-id="task-submit-btn" type='submit' className='btn-submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
