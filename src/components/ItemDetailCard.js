import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemDetailCard = ({data}) => {
  console.log('ItemDetailCard', data);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `RN Restro: ${data.dish} \nOrder at : https://rnrestro.in/menu/${data.link}\n\nShared from the RN Restro app` ||
          '',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // handleAmplitudeEvent('Article Shared', {
          //   article_id: data.id,
          //   article_type: data.type.code,
          //   category_name: data.categories
          //     .map(category => category.title)
          //     .join(','),
          //   share_service: result.activityType,
          //   slug: data.slug,
          // });
          // shared with activity type of result.activityType
        } else {
          // handleAmplitudeEvent('Article Shared', {
          //   article_id: data.id,
          //   article_type: data.type,
          //   category_name: data.categories
          //     .map(category => category.title)
          //     .join(','),
          //   share_service: result.activityType,
          //   slug: data.slug,
          // });
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // console.log('🚀 ~ file: ActionButtons.js ~ line 49 ~ onShare ~ error', error);
    }
  };

  if (data !== undefined) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10%',
          }}>
          <View style={styles.itemCardContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: data.pic,
                }}
                resizeMode="contain"
                style={{
                  borderRadius: 15,
                  height: 300,
                  width: 300,
                }}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.dishText}>{data.dish}</Text>
              <Image
                source={require('../assets/fiver.webp')}
                style={{
                  height: 40,
                  width: 150,
                }}
              />
              <Text>(25 reviews)</Text>
            </View>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutText}>About dish</Text>
              <Text>{data.about}</Text>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.shrOrderConatainer}>
                <View style={{width: '40%'}}>
                  <TouchableOpacity
                    style={styles.shareButton}
                    onPress={onShare}>
                    <EvilIcons name="share-google" color="white" size={35} />
                  </TouchableOpacity>
                </View>
                <View style={{width: '60%'}}>
                  <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.oderText}>Order</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return <Text>Loading....</Text>;
};

export default ItemDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignems: 'center',
    backgroundColor: '#fff',
    padding: '5%',
  },
  itemCardContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    paddingBottom: '5%',
  },
  nameContainer: {marginBottom: '5%'},
  aboutContainer: {marginBottom: '5%'},
  orderContainer: {marginTop: '5%'},

  dishText: {
    fontSize: 20,
    color: 'black',
  },
  ratingText: {},
  aboutText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    // shadowColor: 'gray',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },

  shrOrderConatainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shareButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'purple',
  },
  orderButton: {
    width: 180,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 5,
    // backgroundColor: 'purple',
  },
  oderText: {
    color: 'purple',
    fontSize: 16,
  },
});
