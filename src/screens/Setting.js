import React from 'react'
import { FlatList, Text, View } from 'react-native'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View >
      <Text>{title}</Text>
    </View>
  );

const Setting = () => {

    

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

  return (
    <View>

<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Setting