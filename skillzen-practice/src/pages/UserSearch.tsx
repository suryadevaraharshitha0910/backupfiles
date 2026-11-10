import { useRef, useState } from "react";
import {useQuery,keepPreviousData,} from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { SearchInput } from "../components/SearchInput";
import { UserList } from "../components/userSearchlist";
import { Skeleton } from "../components/Skeleton";
import { EmptyState } from "../components/EmptyState";
import { useDebounce } from "../components/hooks/Debounce";
import { userService } from "../services/user.service";

export function UserSearch() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebounce(search, 500);

  const limit = 6;
  const skip = (page - 1) * limit;

  const {
    data,
    isPending,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["users", debouncedSearch, page],

    queryFn: () =>
      debouncedSearch.trim()
        ? userService.searchUsers(
            debouncedSearch,
            limit,
            skip
          )
        : userService.getUsers(
            limit,
            skip
          ),

    placeholderData: keepPreviousData,

    staleTime: 60000,
  });

  const totalPages = Math.ceil(
    (data?.total ?? 0) / limit
  );

  return (
    <div className="w-full p-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">
          User Search
        </h1>

        <div className="w-full md:w-96">
          <SearchInput
            value={search}
            onChange={setSearch}
            inputRef={inputRef}
          />
        </div>
      </div>

      {isPending ? (
        <Skeleton />
      ) : isError ? (
        <p className="text-center text-red-500">
          Failed to fetch users.
        </p>
      ) : data?.users.length === 0 ? (
        <EmptyState
          title="No Users Found"
          message="Try searching with a different name."
        />
      ) : (
        <>
          {isFetching && (
            <div className="mb-6 flex justify-center">
              <button
                disabled
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
              >
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </button>
            </div>
          )}

          <UserList users={data.users} />

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-lg font-semibold">
              Page {page} of {totalPages}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setPage((prev) => prev - 1)
                }
                disabled={
                  page === 1 || isFetching
                }
                className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              <button
                onClick={() =>
                  setPage((prev) => prev + 1)
                }
                disabled={
                  page >= totalPages || isFetching
                }
                className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}