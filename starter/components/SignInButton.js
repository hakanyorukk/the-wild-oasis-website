import { signInAction } from "@/app/_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
//once button clicked the form will automatically will be submitted
export default SignInButton;

//we can't have any interactivity in a server component
//for this we need to do server actions(allows us add interactivity with server components usually to forms)
