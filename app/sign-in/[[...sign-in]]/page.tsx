import { SignIn } from '@clerk/nextjs';
const SignInPage = () => {
  return (
    <SignIn fallbackRedirectUrl="/journal" forceRedirectUrl={'/journal'} />
  );
};

export default SignInPage;
