import { pathnames } from "@/app/lib/constants";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {pathnames.map((pn) => {
          return (
            <li key={pn.name}>
              <Link
                className="text-xl font-bold hover:text-turquoise transition-colors"
                href={pn.path}
              >
                {pn.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
