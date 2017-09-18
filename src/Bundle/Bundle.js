import React, { Component } from 'react'

class Bundle extends Component {
  state = {
    mod: null
  };

  componentWillMount() {
    this.props.load()
      .then(data => {
        this.setState({
          mod: data.default
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default Bundle