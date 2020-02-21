import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 /*이미 state에 id가 0, 1, 2가 있어서 3으로 설정 */

  state = {
      input: ' ',
      todos: [
        { id: 0, text: 'This', checked: false},
        { id: 1, text: 'is', checked: false},
        { id: 2, text: 'React', checked: false}
      ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: ' ', //  clear input
      // concat을 이용해 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
    })
    });
  }

  handleKeyPress = (e) => {
    //눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle  = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇 번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한객체

    const nextTodos = [
      { id: 0, text: 'This', checked: false},
      { id: 1, text: 'is', checked: false},
      { id: 2, text: 'React', checked: false}
    ];

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    // 가장 최근에 작성한 소스코드//
    nextTodos[index] = {

    }
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;