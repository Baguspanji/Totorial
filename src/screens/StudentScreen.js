import React from 'react';
import { View, FlatList, SafeAreaView} from 'react-native';
import AppStudent from '../components/AppStudent';


const StudentScreen = () => {
  const studentList = [
    { id: '1', nim: '201769040061', nama: 'Muhammad Bagus Panji'},
    { id: '2', nim: '201769040035', nama: 'Maulana Wafi'},
    { id: '3', nim: '201769040065', nama: 'Jidan Fajar'},
    { id: '4', nim: '201769040045', nama: 'Rohmat Hidayat'},
    { id: '5', nim: '201769040067', nama: 'Tarik Sis'},
    { id: '6', nim: '201769040023', nama: 'Semongko'},
  ];

  const studentRender = ({item}) => {
    return (
      <AppStudent nim={item.nim} nama={item.nama}/>
    )
  };

  return (
   <SafeAreaView>
     <FlatList
      data={studentList}
      renderItem={studentRender}
      keyExtractor={item => item.id}
     />
   </SafeAreaView> 
  )
}

export default StudentScreen;