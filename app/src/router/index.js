import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/broneeriaeg',
    name: 'Broneeri aeg',
    component: function () {
      return import('../views/Booking.vue')
    }
  },
    {
      path: '/galerii',
      name: 'Galerii',
      component: function () {
        return import('../views/Gallery.vue')
      }
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: function () {
        return import('../views/Contact.vue')
      }
    },
    {
      path: '/teenusedjahinnad',
      name: 'Teenused ja hinnad',
      component: function () {
        return import('../views/Services.vue')
      }
    },
    {
      path: '/broneeringukinnitus',
      name: 'Broneeringu kinnitus',
      component: function () {
        return import('../views/BookingConfirmation.vue')
      }
    }
];

const router = new VueRouter({
  routes
});

export default router
