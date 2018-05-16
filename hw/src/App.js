import React, { Component } from 'react';

const tasks = [
  {
      "id": "xjh",
      "message": "Успешно пройти React-интенсив компании Lectrum",
      "important": true
  },
  {
      "id": "xjr",
      "message": "Взять автограф у Джареда Лето",
      "important": true
  },
  {
      "id": "xrh",
      "message": "Зарегестрировать бабушку в Твиче",
      "important": false
  },
  {
      "id": "rjh",
      "message": "Записать собаку на груминг",
      "important": false
  },
  {
      "id": "xph",
      "message": "Научиться играть на барабанах",
      "important": true
  }
]

class App extends Component {
  render() {

    const importantTask = tasks.filter(task=>task.important);
      const listOfTasks = importantTask.map((task, index) => {
        return (
          <li key = { index }> { task.message } </li>
        );
      });

        return <ul>{ listOfTasks }</ul>;
  }
}

export default App;
