import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import ProductForm, { IFormState } from '../../components/ProductForm';
import LoadingSpinner from '../../components/LoadingSpinner';

import { AppState, ActionsType } from '../../store';
import { apiEditProduct } from '../../store/products/operations';

const EditProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<AppState, null, ActionsType>>();

  const productId: string = navigation.getParam('productId');

  const product = useSelector((state: AppState) =>
    state.products.userProducts.find(item => item.id === productId)
  );

  if (!product) {
    throw new Error('Product not found');
  }

  const submitHandler = (formState: IFormState) => {
    setIsLoading(true);

    dispatch(
      apiEditProduct({
        title: formState.title,
        price: Number(formState.price),
        imageUrl: formState.imageUrl,
        description: formState.description,
        id: product.id,
        userId: product.userId
      })
    )
      .then(() => {
        setIsLoading(false);
        navigation.goBack();
      })

      .catch(() => {
        setIsLoading(false);
        Alert.alert('Error', 'Could not edit product. try again!');
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
