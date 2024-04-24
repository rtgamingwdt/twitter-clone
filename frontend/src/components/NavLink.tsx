"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinkProps } from "../../types";

export default function NavLink(props: NavLinkProps) {

    const pathname = usePathname();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.href == pathname);
    }, [pathname, props.href]);

    return (
        <Link {...props} {...{ active: `${active}` }}>{props.children}</Link>
    )
}