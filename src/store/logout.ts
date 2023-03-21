import axios from 'axios';
import AuthService from './auth';

export default {
  methods: {
    logout() {
      axios.post('/logout').then(() => {
        AuthService.logout();
      });
    }
  }
}
