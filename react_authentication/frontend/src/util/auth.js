import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  const duration = getTokenDuration();
  if (duration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth?mode=login");
  }
  return null;
}

export function getTokenDuration() {
  const expiration = localStorage.getItem("expiration");
  const expirationDate = new Date(expiration);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}
