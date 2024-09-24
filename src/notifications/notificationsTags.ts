import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Giovani",
    user_email: "giakomogcs@gmail.com",
  });
}

export function tagCarUpdate(itensCount: string) {
  OneSignal.User.addTag("cart_itens_count", itensCount);
}
