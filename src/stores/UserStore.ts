import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: "Learner",
    isLoggedIn: false,
  }),
  getters: {
    getUserName(state) {
      const name = state.userName.split(" ");
      const upperCased = name
        .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" ");
      return upperCased.trim();
    },
  },
  actions: {
    tryLogIn() {
      const user = localStorage.getItem("AppAuth");
      if (user) {
        this.login(user);
      }
    },
    login(name: string) {
      this.userName = name;
      this.isLoggedIn = true;
      localStorage.setItem("AppAuth", this.getUserName);
    },
    logout() {
      localStorage.removeItem("AppAuth");
      this.userName = "Learner";
      this.isLoggedIn = false;
    },
  },
});
