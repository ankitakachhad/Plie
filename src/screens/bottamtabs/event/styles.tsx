import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";
import { Fontfamily } from '../../../constants/fontFamily'


export const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: Colors.lightGray
    },
    headerview: {
        backgroundColor: Colors.white
    },
    titletxt: {
        fontFamily: Fontfamily.semibold,
        color: Colors.charcoalBlack,
        fontSize: 26,
        marginLeft: 35,
        marginTop: 10

    },
    subtxt: {
        fontFamily: Fontfamily.regular,
        color: Colors.charcoalBlack,
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 35
    },
    eventContainer: {
        marginTop: 14,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 9,
        elevation: 2,
        shadowColor: '#88A6FF0D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        paddingLeft: 10
    },
    eventImage: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    eventDetails: {
        marginLeft: 8,
        flex: 1
    },
    eventHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    eventTitle: {
        fontFamily: Fontfamily.semibold,
        fontSize: 16,
        color: Colors.darkGunmetal
    },
    arrowIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginRight: 5
    },
    eventDateLocation: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        marginRight: 9,
    },
    eventDate: {
        fontFamily: Fontfamily.medium,
        fontSize: 12,
        color: Colors.green
    },
    eventLocation: {
        fontFamily: Fontfamily.regular,
        fontSize: 11,
        color: Colors.gray
    },
    eventPrice: {
        fontFamily: Fontfamily.regular,
        fontSize: 11,
        color: Colors.gray,
        marginTop: 5
    },
    eventTags: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginRight: 10,
    },
    eventTag: {
        backgroundColor: Colors.skyBlue,
        borderRadius: 25,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    tagText: {
        color: Colors.darkGunmetal,
        fontSize: 12,
        fontFamily: Fontfamily.medium
    },
    eventIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10,
        gap: 11
    },
    iconWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});
