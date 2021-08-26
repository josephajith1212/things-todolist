import React from 'react'
import {BiTrash} from "react-icons/bi"
import {MdModeEdit, MdDone} from "react-icons/md"

function ToDoList(props) {

    const {toDoList, DoneBtnClicked, HandleEditClicked, HandleDeleteClickTodo} = props
    return (
        <>
            <div className={`container ${toDoList.length>0? "border-info border-top":null} my-4`}>      
                    {
                       toDoList.map(element => {
                           return(
                               <div className="row my-2 justify-content-center " key={element.id}>
                                   <div className="col-3 text-primary">
                                       <h4 className="list_element">{element.val}</h4>
                                   </div>
                                   <div className="col-1 text-white">
                                        <button type="button" className="col-1 btn btn-elegant hoverer" data-toggle="tooltip" title="Mark as completed" onClick={()=>DoneBtnClicked(element)}><MdDone className="px-0 my-1 add-btn hoverer"></MdDone></button>
                                    </div>
                                    <div className="col-1 text-white">
                                        <button type="button" className="col-1 btn btn-elegant hoverer" data-toggle="tooltip" title="Edit" onClick={()=>HandleEditClicked(element)}><MdModeEdit className="px-0 my-1 add-btn hoverer"></MdModeEdit></button>
                                    </div>
                                    <div className="col-1 text-white">
                                        <button type="button" className="col-1 btn btn-elegant hoverer" data-toggle="tooltip" title="Delete" onClick={()=>HandleDeleteClickTodo(element)}><BiTrash className="px-0 my-1 add-btn hoverer"></BiTrash></button>
                                    </div>
                                       
                                </div>
                           )
                       })
                    }
               </div>           
        </>
    )
}

export default ToDoList
