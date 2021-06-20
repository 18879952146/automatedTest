import React, { Component } from 'react';

export default class UndoList extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleDeletItem = (index) => {
    this.props.deletItem(index)
  }

  render() {
    const {list} = this.props
    return (
      <div>
        <div data-test="count">{list.length}</div>
        <ul>
          {
            list.map((item,index) => {
              return <li data-test="list-item" key={`${item}-${index}`}>
                  {item}
                  <span data-test="delet-item" onClick={() => {this.handleDeletItem(index)}}>-</span>
                </li>
            })
          }
        </ul>
      </div>
    )
  }
}