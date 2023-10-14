import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { fetchProductById } from "../../util/apiRequests";
import ProductDetailsHeader from "../../components/product-details/ProductDetailsHeader/ProductDetailsHeader";
import ProductInfos from "../../components/product-details/ProductInfos/ProductInfos";
import Accordion from "../../components/product-details/Accordion/Accordion";
import AmountControler from "../../components/product-details/AmountControler/AmountControler";
import RelatedItems from "../../components/product-details/RelatedItems/RelatedItems";

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

  function onBackPress() {
    navigation.goBack();
  }

  function onRelatedItemCardPress(id: number) {
    console.log('id', id)
  }

  async function getProductDetails() {
    try {
      const response = await fetchProductById(productId);
      setData(response);
      setIsFetching(false);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    setIsFetching(true);
    getProductDetails();
  }, []);

  if (isFetching) {
    return <Text>Loading...</Text>;
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

  if (!isFetching) {
    return (
      <View style={styles.container}>
        <ProductDetailsHeader onBackPress={onBackPress} />
        <ScrollView>
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

          <RelatedItems categoryId={data?.category.id} onRelatedItemCardPress={onRelatedItemCardPress} />
        </ScrollView>
        <AmountControler />
      </View>
    );
  }
}
