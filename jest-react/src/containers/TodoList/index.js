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
      undoList: [...this.state.undoList,item]
    })
  }

  deletItem = (index) => {
    const newList = [...this.state.undoList]
    newList.splice(index,1);
    this.setState({
      undoList: newList
    })
  }


  render() {
    const {undoList} = this.state
    return (
    <div>
      <Header addUndoItem={this.addUndoItem}/>
      <UndoList deletItem={this.deletItem} list={undoList}/>
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