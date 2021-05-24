import {
    InputActionType, INPUT_CHANGE, INPUT_CLEAR
} from "../actionInterface/inputActionInterface";

export const inputChange = (text: string): InputActionType => ({
    type: INPUT_CHANGE,
    payload: text
});

export const inputClear = (): InputActionType => ({
    type: INPUT_CLEAR
});