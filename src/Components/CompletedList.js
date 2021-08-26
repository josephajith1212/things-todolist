import React from 'react'
import {BiTrash} from "react-icons/bi"
import {MdRestore} from "react-icons/md"

function CompletedList(props) {
    const {completedList, HandleDeleteClickCompleted, HandleRestoreClick} = props
    
    return (
        <>
            <div className={`container ${completedList.length>0? "border-secondary border-top":null} my-5`}>
                   {
                       completedList && completedList.map(element => {
                           return(
                               <div className="row my-2 justify-content-center" key={element.id}>
                                   <div className="col-3 text-secondary">
                                       <h4 className="list_element"><del>{element.val}</del></h4>
                                    </div>
                                    <div className="col-1 text-secondary">
                                        <button type="button" className="col-1 btn btn-elegant hoverer" data-toggle="tooltip" title="Restore to list" onClick={()=>HandleRestoreClick(element)}><MdRestore className="px-0 my-1 add-btn hoverer"></MdRestore></button>
                                    </div>
                                    <div className="col-1 text-secondary">
                                        <button type="button" className="col-1 btn btn-elegant hoverer" data-toggle="tooltip" title="Delete" onClick={()=>HandleDeleteClickCompleted(element)}><BiTrash className="px-0 my-1 add-btn hoverer"></BiTrash></button>
                                    </div>
                               </div>
                           )
                       })
                   }
            </div>  
        </>
    )
}

export default CompletedList
