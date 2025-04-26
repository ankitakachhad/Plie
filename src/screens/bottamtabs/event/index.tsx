import { View, Text, StatusBar, Image, FlatList, Platform, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Fontfamily } from '../../../constants/fontfamily';
import { Colors } from '../../../constants/colors';
import axios from 'axios';

const EventListing = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchEventData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing',
        {}, // empty body
        {
          headers: {
            "key": "Authorization",
            "value": "Bearer 148|QwsMFixT9w9MgleAbukZtghUuKNZGxgR1SYDOVMk",
            "type": "text"
          },
        }
      );

      console.log('API Response:', response.data);
      setEventData(response.data.data.events || []); // Make sure to access events array inside data
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchEventData();
  }, []);

  // const renderItem = ({ item }) => (
  //   <View style={styles.eventContainer}>
  //     <Image source={{ uri: item.image }} style={styles.eventImage} />
  //     <View style={styles.eventDetails}>
  //       <View style={styles.eventHeader}>
  //         <Text style={styles.eventTitle}>{item.title}</Text>
  //         <Image source={require('../../../assets/images/arrow.png')} style={styles.arrowIcon} />
  //       </View>
  //       <View style={styles.eventDateLocation}>
  //         <Text style={styles.eventDate}>{item.date}</Text>
  //         <Text style={styles.eventLocation}>{item.location}</Text>
  //       </View>
  //       <Text style={styles.eventPrice}>{item.price}</Text>
  //       <View style={styles.eventTags}>
  //         <View style={{ flexDirection: 'row', gap: 8 }}>
  //           {item.tags?.map((tag, index) => (
  //             <View key={index} style={styles.eventTag}>
  //               <Text style={styles.tagText}>{tag}</Text>
  //             </View>
  //           ))}
  //         </View>
  //         <View style={styles.iconWrapper}>
  //           {/* Share and Fav could be static icons */}
  //           <Image source={require('../../../assets/images/share.png')} style={styles.icon} />
  //           <Image source={require('../../../assets/images/fav.png')} style={styles.icon} />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );


  const renderItem = ({ item }: any) => (
    <View style={styles.eventContainer}>
      <Image source={{ uri: item.event_profile_img }} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <View style={styles.eventHeader}>
          <Text style={styles.eventTitle}>{item.event_name}</Text>
          <Image source={require('../../../assets/images/arrow.png')} style={styles.arrowIcon} />
        </View>
        <View style={styles.eventDateLocation}>
          <Text style={styles.eventDate}>{item.readable_from_date}</Text>
          <Text style={styles.eventLocation}>{item.city}, {item.country}</Text>
        </View>
        <Text style={styles.eventPrice}>
          {item.event_price_from === 0 && item.event_price_to === 0
            ? "Free"
            : `$${item.event_price_from} - $${item.event_price_to}`}
        </Text>
        <View style={styles.eventTags}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {item.keywords?.map((tag, index) => (
              <View key={index} style={styles.eventTag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <View style={styles.iconWrapper}>
            <Image source={require('../../../assets/images/share.png')} style={styles.icon} />
            <Image source={require('../../../assets/images/fav.png')} style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.continer}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
        backgroundColor={Platform.OS === 'ios' ? 'transparent' : 'white'}
        translucent={Platform.OS === 'ios'}
      />
      <View style={styles.headerview}>
        <Text style={styles.titletxt}>Hello Renzo!</Text>
        <Text style={styles.subtxt}>Are you ready to dance?</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={eventData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          contentContainerStyle={{ marginTop: 19, paddingBottom: 60 }}
          ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No events found</Text>}
        />
      )}
    </View>
  );
};

export default EventListing;