import Link from "next/link";

type Props = {};

export const LoginButton: React.FC<Props> = ({}) => {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href="/dashboard/onboard"
        className="rounded-md bg-crimson-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-crimson-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wisky-plum-400"
      >
        Get Started Today!
      </Link>
    </div>
  );
};
