"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";


type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch}: Props) => {
    const router = useRouter ();
    const pathname = usePathname();
    const [searchInput, setSearchIpunt] = useState(defaultValue ?? '');

    const handleSearchEnter = () => {
        if(searchInput) {
                router.push('/search?q=' +encodeURIComponent(searchInput))
        }
    }

    if ( hideOnSearch && pathname === '/search') return null;

    return (
        <Input 
            placeholder="Pesquisar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchIpunt(t)}
            onEnter={handleSearchEnter}
        />
    );
}