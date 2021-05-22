export const INPUT_CHANGE = '@input/INPUT_CHANGE'
export const INPUT_CLEAR = '@input/INPUT_CLEAR'

interface IInputChange {
    type: typeof INPUT_CHANGE
    payload: string
}

interface IInputClear {
    type: typeof INPUT_CLEAR
}

export type InputActionType = IInputChange | IInputClear