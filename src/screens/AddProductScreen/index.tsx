import React from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import uuid from 'uuid';

import ProductForm, { IFormState } from '../../components/ProductForm';

import { addProduct } from '../../store/products/actions';

const AddProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const dispatch = useDispatch();

  const submitHandler = (formState: IFormState) => {
    dispatch(
      addProduct({
        title: formState.title,
        price: Number(formState.price),
        imageUrl: formState.imageUrl,
        description: formState.description,
        id: uuid(),
        userId: 'u1'
      })
    );

    navigation.goBack();
  };

  return <ProductForm submitHandler={submitHandler} />;
};

AddProductScreen.navigationOptions = {
  headerTitle: 'Add a Product'
};

export default AddProductScreen;
