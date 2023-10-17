import { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { fetchProductById } from "../../util/apiRequests";
import ProductDetailsHeader from "../../components/product-details/ProductDetailsHeader/ProductDetailsHeader";
import ProductInfos from "../../components/product-details/ProductInfos/ProductInfos";
import Accordion from "../../components/product-details/Accordion/Accordion";
import AmountControler from "../../components/product-details/AmountControler/AmountControler";
import RelatedItems from "../../components/product-details/RelatedItems/RelatedItems";
import { colors } from "../../styles/globalStyles";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import Button from "../../components/shared/Button/Button";
import { title } from "process";

type StackParamList = {
  HomeRoutes: any;
};

type RouteParams = {
  productId: number;
};

interface ItemData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

type ProductDetailsNavigationProp = NativeStackScreenProps<StackParamList>;

export default function ProductDetails({
  navigation,
  route,
}: ProductDetailsNavigationProp) {
  const { productId } = route.params as RouteParams;

  const [data, setData] = useState<ItemData>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [initializedWithError, setInitializedWithError] = useState<boolean>();

  function onBackPress() {
    navigation.goBack();
  }

  async function getProductDetails() {
    try {
      const response = await fetchProductById(productId);
      setData(response);
      setInitializedWithError(false);
      setIsFetching(false);
    } catch (error) {
      setInitializedWithError(true);
    }
  }

  useEffect(() => {
    setIsFetching(true);
    getProductDetails();
  }, []);

  if (isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={colors.red_500} />
      </View>
    );
  }

  const itemDetailsAccordion = {
    label: "Item details",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolorum tenetur, dolore mollitia rerum similique. Sed, natus animi cupiditate dolore rerum odio officia quia! Laboriosam soluta voluptatibus nemo et praesentium!
Qui labore, corrupti corporis consectetur velit doloribus et quod id asperiores quibusdam officia blanditiis ipsam inventore impedit aut repellendus molestias nostrum, ducimus facilis aperiam laudantium temporibus. Id reprehenderit voluptates ut?
Ipsa, consectetur cupiditate voluptas non quidem illum nihil similique doloremque dignissimos itaque quo suscipit quaerat, animi perferendis, debitis unde tenetur! Maxime illo quod praesentium necessitatibus eaque, vero nisi facilis beatae!
  `,
  };

  const shippingInfoAccordion = {
    label: "Shipping info",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, aliquid neque? Laudantium, incidunt ratione. Facilis natus distinctio tenetur molestiae, mollitia assumenda, accusamus laboriosam totam obcaecati voluptas nam, incidunt dolore nostrum.",
  };

  const supportAccordion = {
    label: "Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quasi! Officia quis modi aperiam odit natus tempora, exercitationem dolorum in, incidunt repellat praesentium et adipisci recusandae eaque optio. Dolore, expedita!",
  };

  if (!isFetching && initializedWithError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ErrorMessage />
        <Button
          title="Back to the home screen"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  if (!isFetching && !initializedWithError) {
    return (
      <View style={styles.container}>
        <ProductDetailsHeader onBackPress={onBackPress} />
        <ScrollView style={styles.scrollContainer}>
          <ProductInfos
            categoryName={data?.category.name}
            description={data?.description}
            images={data?.images}
            productName={data?.title}
            price={data?.price}
          />

          <Accordion
            label={itemDetailsAccordion.label}
            text={itemDetailsAccordion.text}
          />
          <Accordion
            label={shippingInfoAccordion.label}
            text={shippingInfoAccordion.text}
          />
          <Accordion
            label={supportAccordion.label}
            text={supportAccordion.text}
          />

          <RelatedItems
            categoryId={data?.category.id}
            onRelatedItemCardPress={()=>{}}
          />
        </ScrollView>
        <AmountControler productId={productId} productName={data?.title} productPrice={data?.price} images={data?.images}  />
      </View>
    );
  }
}
