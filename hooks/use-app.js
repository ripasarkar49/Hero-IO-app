"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export const useApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        // In Next.js public files are at root
        const response = await axios.get("/appData.json");
        setApps(response.data);
      } catch (err) {
        console.error("Error fetching apps:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
};
