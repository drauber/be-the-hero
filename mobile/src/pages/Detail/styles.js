import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
     },

     header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 20,
        marginBottom: 8,

    },

    incidentProperty: {
        fontSize: 14,
        color: '#414d',
        fontWeight: 'bold',
        marginTop: 15,
    },

    incidentValue: {
        marginTop: 6,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 8,
    },

    heroTitle: {
       fontWeight: 'bold',
       fontSize: 20,
       color: '#13131a',
       lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 8,
    },

    actions: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }





})