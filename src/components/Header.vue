<template>
  <header class="header">
    <div class="container header__container">
      <div class="logo">
        <a><img src="/images/Logo.svg" alt="JustBuy Logo" width="168" height="90" /></a>
      </div>
      <div class="search">
        <a href="#"><img src="/images/search__icon.svg" alt="Search Icon" width="19" height="19" /></a>
        <input
          type="text"
          placeholder="Search..."
          v-model="searchQuery"
          @input="handleSearch"
        />
      </div>
      <nav class="nav">
        <NavItem :class="{ active: $route.path === '/' }">
          <router-link to="/">Home</router-link>
        </NavItem>
        <NavItem :class="{ active: $route.path === '/orders' }">
          <router-link to="/orders">Orders</router-link>
        </NavItem>
        <NavItem :class="{ active: isContactsActive }">
          <a @click="scrollToContacts">Contacts</a>
        </NavItem>
      </nav>

     
      <div class="cart">
        <a href="#"><img src="/images/cart__icon.svg" alt="Cart Icon" width="32" height="27.034" /></a>
      </div>
      <div class="auth">
        <img src="/images/auth__icon.svg" alt="Auth Icon" width="48" height="60" />
        <a href="#" class="auth-link">Sign in</a>
      </div>
    </div>
  </header>
  
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      isContactsActive: false,
    };
  },
  methods: {
    scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });
  },
  
  scrollToTop() {
    const topSection = document.getElementById('top');
    topSection.scrollIntoView({ behavior: 'smooth' });
  }
  }
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 150px;
  background: #060E21;
  box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.08);
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  width: 168px;
  height: 90px;
  cursor: pointer;
}

.search {
  font-family: 'Roboto', sans-serif;
  width: 465px;
  height: 54px;
  border-radius: 45px;
  background: #FFF;
  display: flex;
  align-items: center;
  padding-left: 25px;
  margin-left: 150px;
}

.search a {
  width: 19px;
  height: 19px;
  margin-right: 10px;
}

.search input {
  border: none;
  outline: none;
  width: 90%;
  height: 80%;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(6, 14, 33, 0.50);
}

.nav {
  padding-left: 180px;
}

.nav ul {
  display: flex;
  gap: 90px;
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 600;
  color: #FFF;
  position: relative;
}


.cart {
  align-items: center;
  padding-left: 140px;;
}


.cart a {
  display: flex;
  text-decoration: none;
}

.cart img {
  width: 32px;
  height: 27.034px;
}


.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 65px;
}

.auth img {
  width: 48px;
  height: 60px;
}

.auth-link {
  padding-top: 5px;
  color: #FFF;
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 500;
}

.auth-link:hover {
  text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.40);
}
</style>
