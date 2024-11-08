import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    Neue: require("./../assets/fonts/BebasNeue-Regular.ttf"),
    "CN-B": require("./../assets/fonts/ComicNeue-Bold.ttf"),
    "CN-L": require("./../assets/fonts/ComicNeue-Light.ttf"),
    "CN-R": require("./../assets/fonts/ComicNeue-Regular.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
