import React,{Component} from 'react'
import Header from './components/Header'
import UndoList from './components/UndoList'

import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      undoList: []
    };
  }

  addUndoItem = (item) => {
    this.setState({
      undoList: [...this.state.undoList,{
        status: 'div',
        value: item
      }]
    })
  }

  deletItem = (index) => {
    const newList = [...this.state.undoList]
    newList.splice(index,1);
    this.setState({
      undoList: newList
    })
  }

  changeStatus = (index) => {
    // eslint-disable-next-line array-callback-return
    const newList = this.state.undoList.map((item,listIndex) => {
      if(index === listIndex) {
        return {
          ...item,
          status: 'input'
        }
      }
      return {
        ...item,
        status: 'div'
      }
    })
    this.setState({
      undoList: newList
    })
  }

  handleBlur = (index) => {
    const newList = this.state.undoList.map((item,listIndex) => {
      if(index === listIndex) {
        return {
          ...item,
          status: 'div'
        }
      }
      return item
    })
    this.setState({
      undoList: newList
    })
  }

  valueChange = (index,value) => {
    const newList = this.state.undoList.map((item,listIndex) => {
      if(index === listIndex) {
        return {
          ...item,
          value
        }
      }
      return item
    })
    this.setState({
      undoList: newList
    })
  }


  render() {
    const {undoList} = this.state
    return (
    <div>
      <Header addUndoItem={this.addUndoItem}/>
      <UndoList deletItem={this.deletItem} changeStatus={this.changeStatus} list={undoList} handleBlur={this.handleBlur} valueChange={this.valueChange}/>
      {/* {
        this.state.undoList.map((item,index) => {
          return <div key={index}>{item}</div>
        })
      } */}
    </div>
    )
  }
}

export default TodoList;