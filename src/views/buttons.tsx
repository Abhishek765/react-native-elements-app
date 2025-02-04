import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import { Header, SubHeader } from './header';
import { LinearGradient } from '../components/LinearGradient';

type ButtonsComponentProps = {};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0, 2, 3]);

  return (
    <>
      <Header title="Buttons" />
      <ScrollView>
        <View style={styles.contentView}>
          <SubHeader title="Buttons" />
          <View style={{ alignItems: 'center' }}>
            <Button
              title={'Welcome to\nReact Native Elements'}
              containerStyle={{ marginVertical: 10 }}
            />
            <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{ marginVertical: 10, height: 50, width: 250 }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{ marginVertical: 10, height: 50, width: 230 }}
              onPress={() => console.log('aye')}
            />
            <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              ViewComponent={LinearGradient}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{ marginVertical: 10, height: 80, width: 200 }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
            <Button
              title="Request an agent"
              titleStyle={{ fontWeight: '500' }}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
              }}
              containerStyle={{ marginTop: 10, width: 275, height: 45 }}
            />
            <Button
              title="SIGN UP"
              disabled={true}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
              }}
              containerStyle={{ marginTop: 20, width: 300, height: 45 }}
            />
            <Button
              title="SIGN UP"
              loading={true}
              loadingProps={{
                size: 'small',
                color: 'rgba(111, 202, 186, 1)',
              }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 10,
              }}
              containerStyle={{ width: 300 }}
            />
            <View style={styles.buttonsContainer}>
              <Button
                title="HOME"
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{ width: 130 }}
              />
              <Button
                title="PROFILE"
                icon={{
                  name: 'user',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(199, 43, 98, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{ width: 150 }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Basic Button"
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 3,
                }}
              />
              <Button
                title="Outline Button"
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="HOME"
                loading
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
                containerStyle={{ width: 100, height: 40 }}
              />
              <Button
                title="Clear Button"
                type="clear"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Light"
                buttonStyle={{
                  backgroundColor: 'rgba(244, 244, 244, 1)',
                  borderRadius: 3,
                }}
                containerStyle={{ height: 40 }}
                titleStyle={{ marginHorizontal: 20, color: 'black' }}
              />
              <Button
                title="Dark"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
              <Button
                title="Default"
                containerStyle={{ height: 40 }}
                buttonStyle={{ backgroundColor: 'rgba(78, 116, 289, 1)' }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
            </View>
            <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
              <Button
                title="Secondary"
                buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
              <Button
                title="Danger"
                buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
            </View>
          </View>
          <SubHeader title="Button Groups" />
          <ButtonGroup
            buttons={['SIMPLE', 'BUTTON', 'GROUP']}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <ButtonGroup
            buttons={['Multiple', 'Select', 'Button', 'Group']}
            selectMultiple
            selectedIndexes={selectedIndexes}
            onPress={(value) => {
              setSelectedIndexes(value);
            }}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const CustomTitle = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
      <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
        Minister of Magic
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default withTheme(Buttons, '');
