import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Giovani",
    user_email: "giakomogcs@gmail.com",
  });
}
