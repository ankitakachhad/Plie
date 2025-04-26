import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../../constants/colors';
import { Fontfamily } from '../../../constants/fontfamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerView: {
    marginTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 28,
    color: Colors.black,
    // fontFamily: Fontfamily.primaryBold,
  },
  subText: {
    fontSize: 16,
    color: Colors.gray,
    // fontFamily: Fontfamily.primaryRegular,
    marginTop: 4,
  },
  listContent: {
    marginTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 16,
  },
  eventContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  eventDetails: {
    padding: 12,
  },
  eventTitle: {
    fontSize: 20,
    // fontFamily: Fontfamily.primaryBold,
    color: Colors.black,
    marginBottom: 6,
  },
  eventDateLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    // fontFamily: Fontfamily.primaryRegular,
    // color: Colors.grey,
  },
  eventLocation: {
    fontSize: 14,
    // fontFamily: Fontfamily.primaryRegular,
    // color: Colors.grey,
  },
  eventPrice: {
    fontSize: 16,
    // fontFamily: Fontfamily.primaryBold,
    // color: Colors.primary,
    marginBottom: 10,
  },
  eventTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  eventTag: {
    // backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    // color: Colors.primary,
    // fontFamily: Fontfamily.primaryRegular,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    // color: Colors.grey,
    // fontFamily: Fontfamily.primaryRegular,
  },
});
