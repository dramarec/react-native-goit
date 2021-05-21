import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

interface IProps {
    addHandler: (text: string) => void
}

const AddTodo = ({ addHandler }: IProps) => {
    const [state, setState] = useState<string>('')

    const inputHandler = (text: string) => {
        setState(text)
    }

    const addItem = () => {
        addHandler(state)
        setState('')
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
