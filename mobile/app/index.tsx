import { useClerk } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>Homeeee</Text>
      <Button onPress={() => signOut} title="singout"></Button>
    </View>
  );
};
export default HomeScreen;
