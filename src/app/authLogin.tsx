export const authLogin = async () => {
  try {
    const isAuthenticated = localStorage.getItem("authenticated");

    if (!isAuthenticated) {
      throw new Error("Not authenticated");
    }
  } catch (error) {
    window.location.href = "/login";
  }
};

export const logout = () => {
  localStorage.removeItem("authenticated");
  localStorage.removeItem("username");
  localStorage.removeItem("userId");

  window.location.href = "/login";
};
