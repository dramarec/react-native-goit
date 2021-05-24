import { ITodo } from "../../interfaces";
import {
    ADD_ITEM, DELETE_ITEM, ListActionInterface
} from "../actionInterface/listActioninterface";


const initialstate: ITodo[] = [];

export default (state = initialstate, action: ListActionInterface) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]

        case DELETE_ITEM:
            return state.filter(el => el.id !== action.payload)

        default:
            return state;
    }
}