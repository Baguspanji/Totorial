import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, } from 'react-native';
import AppSantri from '../components/AppSantri';

export default class SantriScreen extends React.Component 
{ 
    constructor(props) 
    {
        super(props);
        this.state={
            isLoading:true,
            dataSource: []
        }
    }

    componentDidMount()
    {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource:responseJson
            })
        })
    }

    renderSantri = ({item, index}) => {
        return (
            <AppSantri santri={item}/>
        )
    }

    render ()
    {

        const style = StyleSheet.create({
            container: {
                flex: 1,
                marginTop: 20,
                backgroundColor: '#ffffff'
            }
        });

        let {dataSource, isLoading} = this.state;
        return(
            <SafeAreaView style={style.container}>
                <FlatList
                    data={dataSource}
                    renderItem={this.renderSantri}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        )

    }
}