
import SignUp from "@/components/auth/SignUp";
import SignIn from "@/components/auth/SignIn";

export default function AuthPage() {
  return (
    <div className="container py-10">
      <div className="grid gap-4 md:grid-cols-2">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
}
