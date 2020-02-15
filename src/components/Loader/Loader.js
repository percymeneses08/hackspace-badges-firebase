import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="padding">
        <div className="center">
          <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}