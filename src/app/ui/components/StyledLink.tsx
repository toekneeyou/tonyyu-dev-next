import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  isNextLink?: boolean;
  nextLinkProps?: LinkProps;
}

export default function StyledLink({
  children,
  isNextLink,
  nextLinkProps = {} as LinkProps,
  ...linkAttributes
}: StyledLinkProps) {
  return (
    <div className="inline-block relative space-y-2">
      {isNextLink ? (
        <Link {...nextLinkProps}>{children}</Link>
      ) : (
        <a {...linkAttributes} className="px-2">
          {children}
        </a>
      )}

      <div className="h-[2px] w-full bg-turquoise" />
    </div>
  );
}
