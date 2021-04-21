import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h3>Not found 404 baby</h3>
      <p>
        Get the hell back to <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};
export default NotFound;
