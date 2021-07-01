import React, { Component } from 'react';

export default class UndoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      undoList: [{
        status: 'div',
        value: 'a'
      }]
    };
  }

  handleDeletItem = (index) => {
    this.props.deletItem(index)
  }

  handleChangeStatus = (index) => {
    this.props.changeStatus(index)
  }

  handleBlur = (index) => {
    this.props.handleBlur(index)
  }

  valueChange = (index,value) => {
    this.props.valueChange(index,value)
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
              return <li data-test="list-item" key={index} className="undo-list-item" onClick={() => {this.handleChangeStatus(index)}}>
                  {
                    item.status === 'div' ? item.value : (
                      <input data-test="input" value={item.value} onBlur={() => {this.handleBlur(index)}} onChange={(e) => {this.valueChange(index,e.target.value)}}/>
                    )
                  }
                  <div data-test="delet-item" className="undo-list-delete" onClick={(e) => {
                    e && e.stopPropagation()
                    this.handleDeletItem(index)
                    }}>-</div>
                </li>
            })
          }
        </ul>
      </div>
    )
  }
}