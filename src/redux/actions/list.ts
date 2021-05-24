import { ITodo } from "../../interfaces";
import { ADD_ITEM, DELETE_ITEM, ListActionInterface } from "../actionInterface/listActioninterface";

export const addItem = (task: ITodo): ListActionInterface => ({
    type: ADD_ITEM,
    payload: task
})

export const deletItem = (id: string): ListActionInterface => ({
    type: DELETE_ITEM,
    payload: id
})