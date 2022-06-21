import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Toggle from '../../Components/AdminComponents/Toggle';
import UserContainer from '../../Components/AdminComponents/UserContainer';
import avatar from '../../Assets/Images/Avatar.jpg';
import Entypo from 'react-native-vector-icons/Entypo';
import SlidingPanel from '../../Components/AdminComponents/SlidingPanel';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

export default function UserManagementPage() {
  const [toggle, setToggle] = useState(0);
  const [position, setPosition] = useState('-100%');
  const [bannedUsers, setBannedUsers] = useState([]);
  const [unbannedUsers, setUnbannedUsers] = useState([]);
  const [user, setUser] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('users')
      .where('type', '==', 'customer')
      .where('blocked', '==', false)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        setUnbannedUsers(data);
      });

    firestore()
      .collection('users')
      .where('blocked', '==', true)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        setBannedUsers(data);
      });
  }, [isFocused]);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <Toggle
            option1="Unbanned"
            option2="Banned"
            toggle={toggle}
            setToggle={setToggle}
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          {toggle == 0 && (
            <>
              {unbannedUsers.length > 0 ? (
                unbannedUsers.map((user, i) => (
                  <UserContainer
                    key={i}
                    user={user}
                    background="#5076ED"
                    setPosition={setPosition}
                    setUser={setUser}
                  />
                ))
              ) : (
                <View style={styles.noUsers}>
                  <Text style={styles.noUsersText}>Sorry, It's empty!</Text>
                </View>
              )}
            </>
          )}
          {toggle == 1 && (
            <>
              {bannedUsers.length > 0 ? (
                bannedUsers.map((user, i) => (
                  <UserContainer
                    key={i}
                    user={user}
                    background="#FB4E4E"
                    setPosition={setPosition}
                    setUser={setUser}
                  />
                ))
              ) : (
                <View style={styles.noUsers}>
                  <Text style={styles.noUsersText}>Sorry, It's empty!</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>

      {/* Modal */}
      <SlidingPanel
        user={user}
        position={position}
        setPosition={setPosition}
        mode={toggle === 0 ? 'block' : 'unblock'}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  toggleContainer: {
    padding: 10,
    paddingTop: 0,
  },
  scrollContainer: {
    height: '100%',
  },
  noUsers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  noUsersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#39BF5D',
    textAlign: 'center',
  },
});
