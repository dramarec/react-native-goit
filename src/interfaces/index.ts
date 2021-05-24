export interface ITodo {
    text: string
    id: string
}
export interface IRootState {
    input: string
    list: ITodo[]
}