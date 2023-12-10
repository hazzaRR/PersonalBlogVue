import { defineStore } from "pinia";
import { BASE_URL } from "../config"; //
import router from "../router/index"

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        return { 
            username: localStorage.getItem('username') || null,
            token: localStorage.getItem('token') || null,
            roles: localStorage.getItem('roles') || [],
            returnUrl: '/'
        }
    },
    actions: {
        async login(username, password) {
            const response = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });


            if (response.status === 200) {
                const data = await response.json();

                localStorage.setItem('username', data.username)
                localStorage.setItem('token', data.token)
                localStorage.setItem('roles', data.roles)
                this.username = data.username,
                this.token = data.token,
                this.roles = data.roles;

                router.push(this.returnUrl || '/');
            }
        },

        async logout(username, password) {
            this.username = null,
            this.token = null,
            this.roles = [];
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('roles');

            router.push('/auth/login');
            }
    
    }
})