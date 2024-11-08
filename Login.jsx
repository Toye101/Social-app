import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "./components/screenWrapper";
import Icon from "../assets/icons";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import BackButton from "./components/BackButton";
import { useRouter } from "expo-router";
import { wp, hp } from "./helpers/common";
import Input from "./components/input";

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={{ paddingLeft: 16 }}>
        <BackButton router={router} />
        {/*Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey</Text>
          <Text style={styles.welcomeTextv}> Welcome Back</Text>
        </View>
        {/*form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.Colors.text }}>
            Please Login to continue
          </Text>
          <Input
            icon={<Icon name="email" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => {}}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.Colors.text,
  },
  welcomeTextv: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.Colors.text,
    paddingLeft: -10,
  },
  from: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semiBold,
    color: theme.Colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.Colors.text,
    fontSize: hp[1.6],
  },
});
