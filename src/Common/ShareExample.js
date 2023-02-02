import React from 'react';
import { View, Button, Share, Image } from 'react-native';
import CustomButton from '../CustomComponents/CustomButton';

const ShareExample = ({ data }) => {
  // console.log("props", data)
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `ItemName:- ${data.ItemName},Code:- ${data.code},BrandName:- ${data.brand}`,
        // url: `${data.url}`,
        // title: 'Awesome Content',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared with an activityType: ${result.activityType}`);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Cancelled');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      {/* <Button title="Share" onPress={onShare} /> */}
      <CustomButton mode={'eleveted'} title={'Share'} IconInButton={'share'} onClick={() => onShare()} />
    </View>
  );
};

export default ShareExample;
