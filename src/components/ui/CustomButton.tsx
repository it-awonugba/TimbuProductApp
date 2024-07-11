import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  type?: 'solid' | 'transparent';
  onPress: () => void;
};

export default function CustomButton({label, type, onPress}: Props) {
  const solidBackground = type === 'solid' ? styles.buttonSolid : null;
  const solidForeground = type === 'solid' ? styles.buttonSolidText : null;
  return (
    <TouchableOpacity
      style={[styles.button, solidBackground]}
      onPress={onPress}>
      <Text style={[styles.buttonText, solidForeground]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
  buttonText: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: 'rgb(0,0,0)',
  },

  buttonSolid: {
    backgroundColor: 'rgb(0,0,0)',
  },

  buttonSolidText: {
    color: 'rgb(255, 255, 255)',
  },
});
