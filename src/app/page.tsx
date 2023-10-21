import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignInForm } from "@/components/forms/SigninForm";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className=" flex pt-12  items-center justify-center ">
        <SignInForm />
      </MaxWidthWrapper>
    </>
  );
}
