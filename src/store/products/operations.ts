import { api } from '../../utils/axiosInstance';
import { getProducts, addProduct, editProduct, deleteProduct } from './actions';

import { IProductUserInput } from './types';
import { Product } from '../../models/product';
import { ThunkActionType } from '..';

interface IAPIProducts {
  [key: string]: IProductUserInput;
}

export const apiGetProducts = (): ThunkActionType => async dispatch => {
  const res = await api().get<IAPIProducts>('/products.json');

  const productList: Product[] = [];

  for (const key in res.data) {
    productList.push({
      id: key,
      userId: 'u1',
      ...res.data[key]
    });
  }

  dispatch(getProducts(productList));
};

export const apiAddProduct = (
  product: IProductUserInput
): ThunkActionType => async dispatch => {
  const res = await api().post<{
    name: string;
  }>('/products.json', { ...product });

  const productId = res.data.name;

  dispatch(
    addProduct({
      ...product,
      id: productId,
      userId: 'u1'
    })
  );
};

export const apiEditProduct = (
  product: Product
): ThunkActionType => async dispatch => {
  await api().patch(`/products/${product.id}.json`, <IProductUserInput>{
    title: product.title,
    description: product.description,
    imageUrl: product.imageUrl,
    price: product.price
  });

  dispatch(editProduct({ ...product }));
};

export const apiDeleteProduct = (
  id: Product['id']
): ThunkActionType => async dispatch => {
  await api().delete(`/products/${id}.json`);

  dispatch(deleteProduct(id));
};
