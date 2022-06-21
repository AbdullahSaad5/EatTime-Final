import {StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodCard = ({data, ...rest}) => {
  return (
    <Card style={styles.foodCard} {...rest}>
      <Card.Cover
        source={{
          uri: data.picture,
        }}
        style={styles.img}
      />
      <Card.Content>
        <Title style={styles.title}>{data.title}</Title>
        <View style={styles.star}>
          <Icon name="star-outline" size={14} color="orange" />
          <Text
            style={{
              color: 'black',
              marginLeft: 5,
            }}>
            {data.ratings.length > 0
              ? data.ratings.reduce((acc, curr) => acc + curr, 0) /
                data.ratings.length
              : '0.0'}
          </Text>
        </View>

        <Paragraph style={styles.paragraph}>Rs. {data.price}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodCard: {
    width: 165,
    height: 220,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 17,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 137,
    height: 117,
    borderRadius: 5,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    width: '100%',
    paddingTop: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'center',
  },
});
