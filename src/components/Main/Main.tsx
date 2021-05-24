import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ViewStyle, FlatList } from 'react-native';
import Header from '../Header/Header';
import { IRootState, ITodo } from '../../interfaces';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTod';
import { addItem, deletItem } from '../../redux/actions/list';

const Main = () => {

    const dispatch = useDispatch()
    const state = useSelector((state: IRootState) => state.list)

    const deleteHandler = (id: string) => {
        dispatch(deletItem(id))
    }

    const newId = state.length + 1

    const addHandler = (text: string) => {
        const item: ITodo = {
            text,
            id: newId.toString(),
        }
        dispatch(addItem(item))
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo addHandler={addHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={state}
                        renderItem={({ item }) => (
                            <TodoItem item={item} deleteItem={deleteHandler} />
                        )}
                    />
                </View>
            </View>

        </View>
    )
}

export default Main

interface Styles {
    container: ViewStyle
    content: ViewStyle
    list: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        // backgroundColor: '#474747',
    },
    content: {
        padding: 40,
    },
    list: {
        // backgroundColor: '#474747',
        fontSize: 40,

    },

});
