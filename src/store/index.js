import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
      categoryName: 'V. Seasonal Promotion',
      id: 'seasonal',
      items: [{
        heading: 'V1. Braised Abalone, Fish Fry ...',
        price: 50,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056145.jpg'
      },
      {
        heading: 'V2. Stir-fried Cured Meat with ...',
        price: 30,
        offprice: '83.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V4. Snapper Slices with butter ...',
        price: 20,
        offprice: '73.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V5. Stir-fried Cured Meat with ...',
        price: 113,
        offprice: '153.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      }
      ]
    },
    {
      categoryName: 'A. Chinese Style Rice',
      id: 'chinese',
      items: [{
        heading: 'V6. Braised Abalone, Fish Fry ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056145.jpg'
      },
      {
        heading: 'V7. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V8. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'B. Fried Noodles',
      id: 'fried',
      items: [{
        heading: 'V9. Braised Abalone, Fish Fry ...',
        price: 835,
        quantity: 1,
        offprice: '93.00',
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056145.jpg'
      },
      {
        heading: 'V10. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'C. Local Flavour',
      id: 'local',
      items: [{
        heading: 'V11. Braised Abalone, Fish Fry ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056145.jpg'
      },
      {
        heading: 'V12. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V13. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      }
      ]
    },
    {
      categoryName: 'D. Noodle In Soup',
      id: 'chiu',
      items: [{
        heading: 'V14. Snapper Slices with butter ...',
        price: 835,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V15. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'E. Eat Smart Restaurant',
      id: 'eat',
      items: [{
        heading: 'V16. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V17. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V18. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'E. Eat Smart Restaurant',
      id: 'hotdishes',
      items: [{
        heading: 'V16. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V17. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V18. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V18. Snapper Slices with butter ...',
        price: 583,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'E. Eat Smart Restaurant',
      id: 'southasia',
      items: [{
        heading: 'V16. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V17. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V18. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    },
    {
      categoryName: 'E. Eat Smart Restaurant',
      id: 'beverage',
      items: [{
        heading: 'V16. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056142.jpg'
      },
      {
        heading: 'V17. Stir-fried Cured Meat with ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      },
      {
        heading: 'V18. Snapper Slices with butter ...',
        price: 83,
        offprice: '93.00',
        quantity: 1,
        img: 'https://images.deliveryhero.io/image/fd-hk/Products/91056146.jpg'
      }
      ]
    }
    ],
    menu: [{
      link: '#seasonal',
      title: 'V. Seasonal Promotions',
      name: 'V. Seasonal Promotions'
    },
    {
      link: '#chinese',
      title: 'A. Chinese Style Rice',
      name: 'A. Chinese Rice'
    },
    {
      link: '#fried',
      title: 'B. Fried Noodles',
      name: 'B. Fried Noodles'
    },
    {
      link: '#local',
      title: 'C. Local Flavour',
      name: 'C. Local Flavour'
    },
    {
      link: '#chiu',
      title: 'D. Chiu Chow Style Noodle in Soup',
      name: 'D. Noodle in Soup'
    },
    {
      link: '#eat',
      title: 'E. Eat Smart Restaurant',
      name: 'E. Eat Smart '
    },
    {
      link: '#hotdishes',
      title: 'F. Traditional hot dishes',
      name: 'F. Traditional hot dishes'
    },
    {
      link: '#southasia',
      title: 'G. South asia style dishes',
      name: 'G. South asia style dishes'
    },
    {
      link: '#beverage',
      title: 'H. Specialty beverages',
      name: 'H. Specialty beverages'
    }
    ],
    shopData: [],
    shops: []
  },
  mutations: {
    SET_SHOP (state, shopData) {
      state.shopData = shopData
    },

    SET_SHOPS (state, shops) {
      state.shops = shops
    }

  },
  actions: {
    getShop ({ commit }, data) {
      axios({
        method: 'post',
        url: api.getShop,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ latlong: '(22, 113)' })
      })
        .then(response => {
          console.log(response)
          commit('SET_SHOP', response.data)
        })
    },

    getShops ({ commit }) {
      axios({
        method: 'get',
        url: api.getShops,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
          commit('SET_SHOPS', response.data)
        })
    }
  },
  modules: {
  }
})
