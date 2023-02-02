import React, {useState, useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

const colors = [];

for (let i = 0; i < 10; i++)
  colors.push(
    `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255,
    )},${Math.floor(Math.random() * 255)})`,
  );

const Game = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [reqIndex, setreqIndex] = useState(0);
  const [btn, setBtn] = useState('Start');
  const isInitialMount = useRef(true);
  const [level, setLevel] = useState(0);
  const [duration, setDuration] = useState(2000);

  var Anim;
  const FadeInView: React.FC<FadeInViewProps> = props => {
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1))
    useEffect(() => {
      // console.log(isInitialMount)
      Anim = Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        },
        [Anim],
      );
      if (isInitialMount.current) {
        isInitialMount.current = false
      } else {
        Anim.start(() => {
          setColorIndex(Math.floor(Math.random() * 100) % colors.length)
          setFadeAnim(new Animated.Value(0))
          Anim.start()
        })
      }
    }, [Anim])

    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    );
  };

  const handleSubmit = () => {
    if (btn == 'Stop') {
      Anim.stop()
      if (colors[colorIndex] == colors[reqIndex]) {
        Alert.alert('You Win')
        setLevel(level + 1)
        setDuration(duration - 500)
      } else {
        setLevel(0)
        setDuration(2000)
        Alert.alert('YOu lose')
      }
      setBtn('Start')
      isInitialMount.current = true
      setreqIndex(Math.floor(Math.random() * 100) % colors.length)
    } else {
      setBtn('Stop')
      Anim.start()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 40, marginBottom: 40}}>
        Level {level}
      </Text>
      <FadeInView>
        <View
          style={{...styles.fade, backgroundColor: colors[colorIndex]}}></View>
      </FadeInView>

      <View style={{...styles.color, backgroundColor: colors[reqIndex]}}></View>
      <Text>Color</Text>
      <TouchableOpacity style={styles.touch} onPress={handleSubmit}>
        <Text style={{fontSize: 30}}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '30%',
  },
  fade: {
    width: 150,
    height: 150,
    backgroundColor: 'powderblue',
    borderRadius: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: 200,
    height: 60,
    backgroundColor: '#fde',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  color: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
});

export default Game;
