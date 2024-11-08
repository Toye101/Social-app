import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "./components/screenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp } from "./helpers/common";
import { hp } from "./helpers/common";
import { theme } from "../constants/theme";
import Buttonb from "./components/Button";
import { useRouter } from "expo-router";
const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/*welcome image*/}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("./../assets/images/welcome.png")}
        />
        {/*title */}
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchline}>
            Where every thought finds a home and every image tells a story.
          </Text>
        </View>
        {/*footer */}
        <View style={styles.footer}>
          <Buttonb
            title={"Get Started"}
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("./signUp")}
          />
          <View style={styles.Bottomtxtcon}>
            <Text styel={styles.logintext}>Already have an account!</Text>
            <Pressable onPress={() => router.push("./Login")}>
              <Text
                style={[
                  styles.logintext,
                  {
                    color: theme.Colors.primaryDark,
                    fontWeight: theme.fonts.semiBold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.Colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.Colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  Bottomtxtcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  logintext: {
    textAlign: "center",
    color: theme.Colors.text,
    fontSize: hp(1.6),
  },
});
