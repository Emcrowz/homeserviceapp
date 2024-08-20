import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        setData(await res.json());
        setLoading(false);
      } catch (fail) {
        setFail(fail);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, fail };
};
