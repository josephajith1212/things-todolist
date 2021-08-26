import React, {useState, useEffect} from 'react'
import AddToList from './AddToList'
import CompletedList from './CompletedList'
import ToDoList from './ToDoList'



function MainPage() {
    const [inputValue, setInputValue] = useState('')
    const HandleInputChange = e => setInputValue(e.target.value)
    const [toDoList, setToDoList] = useState([])
    const [completedList, setCompletedList] = useState([])
    
    const AddBtnClicked = () => {
        if (inputValue){
            const withId = {id: new Date().getTime().toString(), val: inputValue}
            setToDoList([...toDoList, withId])
            setInputValue('')
        }else{}
    }
    const DoneBtnClicked = (element) => {
        setCompletedList([...completedList, element])
        const removeIndex = toDoList.map(item => item.id).indexOf(element.id)
        toDoList.splice(removeIndex,1)
        setToDoList(toDoList)
    }
    const HandleDeleteClickTodo = (element) => {
        const removeIndex = toDoList.map(item => item.id).indexOf(element.id)
        toDoList.splice(removeIndex,1)
        setToDoList([...toDoList])
    }
    const HandleEditClicked = (element) =>{
        const removeIndex = toDoList.map(item => item.id).indexOf(element.id)
        toDoList.splice(removeIndex, 1)
        setInputValue(element.val)
    }
    const HandleDeleteClickCompleted = (element) => {
        const removeIndex = completedList.map(item => item.id).indexOf(element.id)
        completedList.splice(removeIndex,1)
        setCompletedList([...completedList])
    }
    const HandleRestoreClick = (element) => {
        setToDoList([...toDoList, element])
        const removeIndex = completedList.map(item => item.id).indexOf(element.id)
        completedList.splice(removeIndex, 1)
        setCompletedList(completedList)
    }
  
    // document.querySelector('#main_input').addEventListener('keydown', function HandleKeyPress(e){e.key==="Enter"? console.log("keypress"):null})

    return (
        <>
           <div className="container">
               <AddToList inputValue={inputValue} HandleInputChange={HandleInputChange} AddBtnClicked={AddBtnClicked}></AddToList>
               <ToDoList  toDoList={toDoList} DoneBtnClicked={DoneBtnClicked} HandleEditClicked={HandleEditClicked} HandleDeleteClickTodo={HandleDeleteClickTodo}></ToDoList>
               <CompletedList completedList={completedList} HandleDeleteClickCompleted={HandleDeleteClickCompleted} HandleRestoreClick={HandleRestoreClick}></CompletedList>
           </div>
        </>
    )
}

export default MainPage
