import { SignUp, useUser } from '@clerk/nextjs';
const SignUpPage = () => {
  //   const { user } = useUser();

  //   if (!user) {
  return (
    <SignUp
      fallbackRedirectUrl="/new-user"
      // signInFallbackRedirectUrl="/new-user"
      forceRedirectUrl={'/new-user'}
    />
  );
  //   }

  //   return <div>Welcome!</div>;
};

export default SignUpPage;
