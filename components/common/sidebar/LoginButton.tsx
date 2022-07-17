import GoogleLogin from 'react-google-login';

export interface ILoginButtonProps {}

export default function LoginButton(props: ILoginButtonProps) {
  return (
    <section className="px-2 py-4 hidden xl:block">
      <h2 className="text-gray-400">Log in to like and commment!</h2>
      <GoogleLogin
        clientId=""
        render={(renderProps) => (
          <button
            className="bg-white text-lg text-[#F51997] border-[#F51997] border-[1px] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 cursor-pointer hover:text-white hover:bg-[#F51997]"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login
          </button>
        )}
        buttonText="Login"
        onSuccess={() => {}}
        onFailure={() => {}}
        cookiePolicy={'single_host_origin'}
      />
    </section>
  );
}
