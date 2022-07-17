import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

export interface ILoginButtonProps {}

export default function LoginButton(props: ILoginButtonProps) {
  const user = true;
  return (
    <section className=" hidden xl:block">
      {user ? (
        <GoogleLogin
          onSuccess={(response: CredentialResponse) => {
            console.info('Successfully logged in!', response);
          }}
          onError={() => {
            console.error('Login Failed');
          }}
        />
      ) : null}
    </section>
  );
}
