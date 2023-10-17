import { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { fetchCategories } from "../../util/apiRequests";
import HomeSection from "../../components/home-screen/HomeSection/HomeSection";
import { styles } from "./style";
import HomeHeader from "../../components/home-screen/HomeHeader/HomeHeader";
import SearchButton from "../../components/home-screen/SearchButton/SearchButton";
import HomeProfileHeader from "../../components/home-screen/HomeProfileHeader/HomeProfileHeader";
import Splash from "../Splash/Splash";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import { TokenContext } from "../../contexts/authJWTContext";
import { getSingleUser } from "../../util/apiUsers";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

interface ItemData {
  id: number;
  name: string;
}

export default function Home({ navigation }: HomeScreenNavigationProp) {
  const [initializing, setInitializing] = useState<boolean>();
  const [initializedWithError, setInitializedWithError] = useState<boolean>();
  const [data, setData] = useState<ItemData[]>([]);
  const [isLoggednIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const { id } = useContext(TokenContext);

  const authContext = useContext(TokenContext);

  async function getCategories() {
    try {
      const response = await fetchCategories();
      setData(response);
      setInitializedWithError(false);
      setInitializing(false);
    } catch (error) {
      setInitializedWithError(true);
    }
  }

  const handleUser = async (id: any) => {
    try {
      const data = await getSingleUser(id);
      setName(data?.name);
      setAvatar(data?.avatar);
    } catch (e) {
      alert("Erro handle" + e);
    }
  };

  useEffect(() => {
    setInitializing(true);
    getCategories();
    handleUser({ id });
  }, [id]);

  useEffect(() => {
    if (authContext.tokenReceived) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authContext.tokenReceived]);

  function onCardPress(id: number) {
    navigation.navigate("HomeRoutes", {
      screen: "ProductDetails",
      params: { productId: id },
    });
  }

  if (initializing) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      {!initializing && !initializedWithError && (
        <>
          <View style={styles.stickyHeader}>
            {isLoggednIn ? (
              <HomeProfileHeader userImageUrl={avatar} userName={name} />
            ) : null}

            <SearchButton onCardPress={onCardPress} />
          </View>

          <FlatList
            style={{ zIndex: -1 }}
            ListHeaderComponent={HomeHeader}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{ marginVertical: 15 }}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              initializing ? (
                <Splash />
              ) : (
                <HomeSection
                  onCardPress={onCardPress}
                  categoryId={item.id}
                  categoryName={item.name}
                />
              )
            }
          />
        </>
      )}
      {!initializing && initializedWithError && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ErrorMessage />
        </View>
      )}
    </View>
  );
}
