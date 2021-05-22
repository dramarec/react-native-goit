import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'

import { StyleSheet, Text, View, ViewStyle, FlatList } from 'react-native';
import Header from './components/Header/Header';
import todos from './data.json';
import { ITodo } from './interfaces';
import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTod';


export default function App() {

    const [state, setState] = useState<ITodo[]>(todos)

    const deleteItem = (id: number) => {
        setState(prev => prev.filter(item => item.id !== id))
    }

    const addHandler = (text: string) => {
        const item: ITodo = {
            text,
            id: state.length + 1,
        }
        setState(prev => [...prev, item])
    }

    return (
        <Provider store={store}>

            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo addHandler={addHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={state}
                            renderItem={({ item }) => (
                                <TodoItem item={item} deleteItem={deleteItem} />
                            )}
                        />
                    </View>
                </View>

            </View>
        </Provider>
    );
}

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
