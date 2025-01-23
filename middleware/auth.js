export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();

  // If user is not authenticated and trying to access a protected route
  if (!auth.checkAuth()) {
    // Redirect to login page
    return navigateTo("/login");
  }
});
