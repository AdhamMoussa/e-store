import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid';

import ProductForm, { IFormState } from '../../components/ProductForm';

import { editProduct } from '../../store/products/actions';
import { AppState } from '../../store';

const EditProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const dispatch = useDispatch();

  const productId: string = navigation.getParam('productId');

  const product = useSelector((state: AppState) =>
    state.products.userProducts.find(item => item.id === productId)
  );

  if (!product) {
    throw new Error('Product not found');
  }

  const submitHandler = (formState: IFormState) => {
    dispatch(
      editProduct({
        title: formState.title,
        price: Number(formState.price),
        imageUrl: formState.imageUrl,
        description: formState.description,
        id: product.id,
        userId: product.userId
      })
    );

    navigation.goBack();
  };

  return (
    <ProductForm
      submitHandler={submitHandler}
      formInitialState={{
        title: product.title,
        description: product.description,
        price: product.price.toString(),
        imageUrl: product.imageUrl
      }}
    />
  );
};

EditProductScreen.navigationOptions = {
  headerTitle: 'Edit Product'
};

export default EditProductScreen;
