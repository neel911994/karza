import { apiService } from "@/services/apiService";

export async function getTokensAndSetLocalStorage(code: string) {
  try {
    const res = await apiService.getTokensService(code);
    if (res && res.username && res.accessToken) {
      localStorage.setItem("userName", res.username);
      localStorage.setItem("accessToken", res.accessToken);
      // Optionally, trigger any authentication state update here
      // e.g., setIsUserLoggedIn(true) if you have a context or state
      // Optionally, navigate to dashboard if using router
      // window.location.href = "/dashboard";
    }
    return res;
  } catch (err) {
    console.error("Failed to get tokens", err);
    throw err;
  }
}
