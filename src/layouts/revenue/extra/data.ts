import { ImageSourcePropType } from 'react-native';

export class Product {

  constructor(readonly id: number,
              readonly title: string,
              readonly subtitle: string,
              readonly image: ImageSourcePropType,
              readonly price: number,
              readonly toggle: boolean) {
  }


  static boneLess(): Product {
    return new Product(
      0,
      'Mutton Flesh',
      'Bone Less Fresh Meat',
      require('../assets/image-product-1.png'),
      750,
      true,
    );
  }

  static withBone(): Product {
    return new Product(
      1,
      'Mutton Flesh',
      'Bone Fresh Meat',
      require('../assets/image-product-1.png'),
      950,
      false,
    );
  }
}
