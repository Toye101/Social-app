import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";
import React from "react";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 40,
      }}
    >
      <Button title="Welcome" onPress={() => router.push("./Welcome")} />
    </View>
  );
}
