import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Favourite = () => {
  const favorites = useSelector(state => state.favorites);

  const renderItem = ({ item }:any) => (
    <View style={styles.eventContainer}>
      <Image source={{ uri: item.event_profile_img }} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <View style={styles.eventHeader}>
          <Text style={styles.eventTitle}>{item.event_name}</Text>
        </View>
        <Text style={styles.eventDate}>{item.readable_from_date}</Text>
        <Text style={styles.eventLocation}>{item.city}, {item.country}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.continer}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No favorites yet!</Text>}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
};

export default Favourite

