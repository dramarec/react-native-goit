import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './TodoItemStyle'
import { ITodo } from '../../interfaces';

interface IProps {
    item: ITodo
    deleteItem: (id: number) => void
}

export default function TodoItem({ item, deleteItem }: IProps) {
    return (
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
