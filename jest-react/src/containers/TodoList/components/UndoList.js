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
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div data-test="count" className="undo-list-count">{list.length}</div>
        </div>
        <ul className="undo-list-content">
          {
            list.map((item,index) => {
              return <li data-test="list-item" key={`${item}-${index}`} className="undo-list-item">
                  {item}
                  <div data-test="delet-item" className="undo-list-delete" onClick={() => {this.handleDeletItem(index)}}>-</div>
                </li>
            })
          }
        </ul>
      </div>
    )
  }
}