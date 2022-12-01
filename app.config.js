import "dotenv/config";
import * as pkg from "./package.json";

export default {
  expo: {
    name: "Easy-Chatbot",
    slug: "Easy-Chatbot",
    version: pkg.version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      huggingfaceKey:
        process.env.HUGGINGFACE_KEY ?? "getYourFreeKeyForUnlimitedCalls",
      baseURL:
        "https://api-inference.huggingface.co/models/deepset/tinyroberta-squad2",
      messagesPlaceholder: "Go ask Alice..."
    },
  },
};
