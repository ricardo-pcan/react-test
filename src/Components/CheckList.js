import React, {Component} from 'react';

class CheckList extends Component {
  render() {
    const tasks = this.props.tasks.map((task, idx) => (
      <li key={idx} className="checklist__task">
        <input type="checkbox" defaultChecked={task.done}/>
        {task.name}
        <a href="#" className="checklist__task--remove"/>
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Create new task"
          />
      </div>

    );
  }
}

CheckList.propTypes = {
  tasks: React.PropTypes.object
};

export default CheckList;
