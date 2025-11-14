// /services/RequestService.ts

class RequestService {
    async post(url: string, data: any) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.message || "Request failed");
        }
  
        return result;
      } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
      }
    }
  
    async get(url: string) {
      try {
        const response = await fetch(url);
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.message || "Request failed");
        }
  
        return result;
      } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
      }
    }
  }
  
  export const requestService = new RequestService();
  