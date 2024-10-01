import { SignIn, useUser } from '@clerk/nextjs';
const SignInPage = () => {
  //   const { user } = useUser();

  //   if (!user) {
  return (
    <SignIn fallbackRedirectUrl="/journal" forceRedirectUrl={'/journal'} />
  );
  //   }

  //   return <div>Welcome!</div>;
};

export default SignInPage;

// const SignInPage = () => {
//   return <SignIn />;
// };
// export default SignInPage;
