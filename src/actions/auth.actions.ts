import { apiService } from "@/services/apiService";

export async function fetchTokensAndStore(code: string) {
  try {
    const res = await apiService.getTokensService(code);
    if (res && res.username && res.accessToken) {
      localStorage.setItem("userName", res.username);
      localStorage.setItem("accessToken", res.accessToken);
      return res;
    }
    throw new Error("Invalid token response");
  } catch (err) {
    console.error("Failed to fetch/store tokens", err);
    throw err;
  }
}
