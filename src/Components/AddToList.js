import React from 'react'
import {FcTodoList}  from "react-icons/fc" 
import {ImPlus} from "react-icons/im"


function AddToList(props) {
    const {inputValue, HandleInputChange, AddBtnClicked} = props
    return (
        <>
            <div className="row">
                   <div className="col d-flex justify-content-center my-5">
                        <FcTodoList className="" style={{width: "80px", height:"50px"}}/><h1 className="text-white">Things to do...</h1>
                   </div>
               </div>
               <div className="container mx-5">
                    <div className="row justify-content-center mx-5">
                        <input type="text" className="col-4 border rounded" id="main_input" value={inputValue} onChange={(e) => HandleInputChange(e)}></input>
                        <button type="button" className="col-1 btn btn-elegant" data-toggle="tooltip" title="Add to list" id="add_btn" onClick={AddBtnClicked}><ImPlus className="px-0 my-1 add-btn hoverer" id="add_btn_hover"></ImPlus></button>
                    </div>
               </div>
        </>
    )
}

export default AddToList