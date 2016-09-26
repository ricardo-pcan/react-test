import React, {Component} from 'react';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
    this.handleToggleDetails = this._handleToggleDetails.bind(this);
  }
  _handleToggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }
  render() {
    let cardDetails;

    const sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    if (this.state.showDetails) {
      cardDetails = (
        <div clasName="card__details">
          {marked(this.props.description)}
          <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      );
    }
    return (
      <div className="card">
        <div style={sideColor}/>
        <div
          className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"}
          onClick={this.handleToggleDetails}
          >{this.props.title}
        </div>
          {cardDetails}
      </div>
    );
  }
}

const titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(`${propName} in ${componentName} is longer that 80 characters`);
    }
  }
};

Card.propTypes = {
  title: titlePropType,
  description: React.PropTypes.string,
  id: React.PropTypes.number,
  tasks: React.PropTypes.object,
  color: React.PropTypes.string
};

export default Card;
