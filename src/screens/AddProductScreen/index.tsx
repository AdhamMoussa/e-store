import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import ProductForm, { IFormState } from '../../components/ProductForm';
import LoadingSpinner from '../../components/LoadingSpinner';

import { ThunkDispatchType } from '../../store';
import { apiAddProduct } from '../../store/products/operations';
import { Alert } from 'react-native';

const AddProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<ThunkDispatchType>();

  const submitHandler = (formState: IFormState) => {
    dispatch(
      apiAddProduct({
        title: formState.title,
        price: Number(formState.price),
        imageUrl: formState.imageUrl,
        description: formState.description
      })
    )
      .then(() => {
        setIsLoading(false);
        navigation.goBack();
      })

      .catch(() => {
        setIsLoading(false);
        Alert.alert('Error', 'Could not add product. try again!');
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <ProductForm submitHandler={submitHandler} />;
};

AddProductScreen.navigationOptions = {
  headerTitle: 'Add a Product'
};

export default AddProductScreen;
