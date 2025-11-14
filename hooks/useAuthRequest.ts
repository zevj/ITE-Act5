// /hooks/useAuthRequest.ts

import { useState } from "react";
import { requestService } from "@/services/RequestService";
import { API } from "@/constants/api";

export function useAuthRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await requestService.post(API.LOGIN, {
        email,
        password,
      });

      return response; // contains token or success message
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}
