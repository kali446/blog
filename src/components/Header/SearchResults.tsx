import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Loader from "@/shared/Loader";
import debounce from "lodash/debounce";
import CardArticle10 from "../Cards/CardArticle10";
import { GlobalContext } from "@/context/global";
import { getClient, getSearchedArticles } from "@/lib/client";
import { Article } from "@/lib/queries";
import { SEARCH_RESUTS_LIMIT } from "@/utils";

interface Props {
  show: boolean;
}

const SearchResults = ({ show }: Props) => {
  const client = getClient();
  const { searchText } = useContext(GlobalContext);
  const [results, setResults] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

  useEffect(() => {
    if (show && loading) {
      searchHandler(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    if (results?.length) {
      const pageSize = Math.ceil(total);

      if (page < pageSize) {
        setShowLoadMore(true);
      } else {
        setShowLoadMore(false);
      }
    }
  }, [results]);

  const searchHandler = useMemo(() => {
    return debounce(async (query) => {
      try {
        setLoading(true);
        const data = await getSearchedArticles(client, `${query}*`);

        if (data?.articles?.length) {
          setResults(data.articles);
        } else {
          setError(`No resutls found for this query: ${query}`);
        }

        setTotal(data.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(`No resutls found for this query: ${query}`);
      }
    }, 600);
  }, []);

  const loadMoreHandler = async () => {
    setLoading(true);
    setPage(page + 1);
    const pageSize = Math.ceil(total);

    if (page < pageSize) {
      const data = await getSearchedArticles(
        client,
        `${searchText}*`,
        page + 1,
        SEARCH_RESUTS_LIMIT,
      );

      if (data?.articles?.length) {
        setResults(
          results?.length ? [...results, ...data.articles] : data.articles,
        );
      }
      setLoading(false);
    } else {
      setShowLoadMore(false);
      setLoading(false);
    }
  };

  return (
    <div className="absolute left-[50%] top-[100%] z-[1000] max-h-[85vh] w-[95%] translate-x-[-50%] overflow-y-auto rounded-b-[.75rem] bg-white p-5 drop-shadow-sm dark:bg-dark-layoutElement md:fixed md:top-header md:w-[100vw] xs:p-3">
      {!results?.length && searchText.length ? (
        <Loader errorMsg={error} error={loading ? false : true} />
      ) : null}

      {results?.length && (
        <>
          <div className="mx-auto mb-3 flex w-[60%] items-center gap-3 lg:w-[80%] md:w-[90%] sm:w-full xs:flex-col xs:items-start xs:gap-1">
            <span className="rounded-full bg-black/[.1] px-3 py-1 text-sm capitalize leading-[1] text-light-primary dark:bg-white/[.1] dark:text-dark-secondary xs:text-xs">
              results found:
              <b className="pl-1">{total}</b>
            </span>

            <span className="rounded-full bg-black/[.1] px-3 py-1 text-sm capitalize leading-[1] text-light-primary dark:bg-white/[.1] dark:text-dark-secondary">
              search query:
              <b className="pl-1">{searchText}</b>
            </span>
          </div>

          <div className="mx-auto w-[60%] lg:w-[80%] md:w-[90%] sm:w-full">
            {results.map((item, i) => (
              <CardArticle10 key={i} item={item} />
            ))}

            {results.length && (
              <>
                {showLoadMore ? (
                  <button
                    onClick={loadMoreHandler}
                    className="h-[3rem] w-full rounded-bl-md rounded-br-md bg-black text-center text-[.775rem] font-semibold uppercase tracking-wide text-white"
                  >
                    {loading ? "Please wait..." : "load more"}
                  </button>
                ) : (
                  <button className="h-[3rem] w-full rounded-bl-md rounded-br-md bg-black text-center text-[.775rem] font-semibold uppercase tracking-wide text-white">
                    no more results to show
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
