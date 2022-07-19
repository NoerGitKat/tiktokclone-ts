import { CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { IDecodedUser, IUser } from '../interfaces';
import { BASE_URL } from './constants';

export const createOrGetUser = async (
  response: CredentialResponse,
  addUser: (user: IUser) => void,
) => {
  const decodedCreds: IDecodedUser = jwt_decode(response.credential || '');

  const user: IUser = {
    _id: decodedCreds.sub,
    _type: 'user',
    userName: decodedCreds.name,
    image: decodedCreds.picture,
  };

  try {
    await axios.post(`${BASE_URL}/auth`, user);
    addUser(user);
  } catch (error) {
    console.error('Error! Could not create user', error);
  }
};
