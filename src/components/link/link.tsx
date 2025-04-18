import { Link } from "react-router-dom";

interface PageLink {
  linkTo: string;
  text: string;
}

export default function PageLink({ linkTo, text }: PageLink) {
  return (
    <Link
      to={linkTo}
      className={`block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none`}
    >
      {text}
    </Link>
  );
}
