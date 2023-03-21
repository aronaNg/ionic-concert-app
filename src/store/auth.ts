const AuthService = {
    logout() {
      localStorage.removeItem('users');
      window.location.href = '/login';
    }
  };
  
  export default AuthService;
  