import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { IUser } from '../../interfaces';
import { createOrGetUser } from '../../utils';

export interface ILoginButtonProps {
  addUser: (user: IUser) => any;
}

export default function LoginButton({ addUser }: ILoginButtonProps) {
  const user = true;
  return (
    <section className=" hidden xl:block">
      {user ? (
        <GoogleLogin
          onSuccess={(response: CredentialResponse) => {
            createOrGetUser(response, addUser);
          }}
          onError={() => {
            console.error('Login Failed');
          }}
        />
      ) : null}
    </section>
  );
}
