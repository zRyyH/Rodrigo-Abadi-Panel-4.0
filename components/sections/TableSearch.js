"use client";

import React from "react";
import SearchbarWithFilters from "@/components/sections/SearchBar";
import useSearchWithFilters from "@/hooks/useSearchWithFilters";
import { Pagination } from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { useQuery } from "@tanstack/react-query";

export function TableSearch({ children, collection, service }) {
    const searchProps = useSearchWithFilters([collection]);

    const { data } = useQuery({
        queryKey: [collection, searchProps.search, searchProps.activeFilters],
        queryFn: () => service.getAll(searchProps.search, searchProps.activeFilters),
    });

    const paginationProps = usePagination(data?.data);

    return (
        <div className="flex flex-col gap-4" >
            <SearchbarWithFilters {...searchProps} />
            {React.cloneElement(children, { rows: paginationProps.currentData })}
            <Pagination {...paginationProps} />
        </div>
    );
}