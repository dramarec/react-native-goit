import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from '../../interfaces'
import { inputChange, inputClear } from '../../redux/actions/input'
interface IProps {
    addHandler: (text: string) => void
}

const AddTodo = ({ addHandler }: IProps) => {
    // const [state, setState] = useState<string>('')
    const dispatch = useDispatch()
    const state = useSelector((state: IRootState) => state.input)

    const inputHandler = (text: string) => {
        // setState(text)
        dispatch(inputChange(text))
    }

    const addItem = () => {
        addHandler(state)
        // setState('')
        dispatch(inputClear())
    }

    return (
        <View>
            <TextInput
                placeholder='new todo'
                value={state}
                onChangeText={inputHandler}
            />
            <Button
                title='Add todo'
                onPress={addItem}
                color='coral'
            />
        </View>
    )
}

export default AddTodo