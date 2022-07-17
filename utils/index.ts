import { CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { IDecodedUser, IUser } from '../interfaces';

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

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
    console.log('whhat  happens', user);
    addUser(user);
  } catch (error) {
    console.error('error');
  }
};
