// src/bootstrap.ts
export const bootstrapAuth = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get('token');

  if (token) {
    localStorage.setItem('token', token);
    searchParams.delete('token');
    const newUrl =
      window.location.pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : '');
    window.history.replaceState({}, '', newUrl);
  }
};
