// import { createStore } from 'vuex'
// import axios from 'axios'
// import { toast } from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'
// import router from '@/router'
// import { applyToken } from '@/service/AuthenticatedUser.js'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()
// const apiURL = 'https://capstoneeomp-b3n0.onrender.com/'
// // Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)
// export default createStore({
//   state: {
//     users: null,
//     user: null,
//     cars: null,
//     recentCars: null,
//     car: null,
//     order: null,
//     orders: null
//   },
//   getters: {
//   },
//   mutations: {
//     getUsers(state, value) {
//       state.users = value
//     },
//     getUser(state, value) {
//       state.user = value
//     },
//     getCars(state, value) {
//       state.cars = value
//     },
//     getRecentCars(state, value) {
//       state.recentCars = value
//     },
//     getCar(state, value) {
//       state.car = value
//     },
//     getOrder(state, value) {
//       state.order = value
//     },
//     getOrders(state, value) {
//       state.orders = value
//     }
//   },
//   actions: {
//     // ==== User ========
//     async fetchUsers(info) {
//       try {
//         const { results, msg } = await (await axios.get(`${apiURL}user`)).data
//         if (results) {
//           info.commit('getUsers', results)
//         } else {
//           toast.error(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async fetchUser(info, id) {
//       try {
//         const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
//         if (result) {
//           info.commit('getUser', result)
//         } else {
//           toast.error(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async register(info, payload) {
//       try {
//         const { msg, err, token } = await (await axios.post(`${apiURL}user/register`, payload)).data
//         if (token) {
//           info.dispatch('fetchUsers')
//           toast.success(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//           router.push({ name: 'login' })
//         } else {
//           toast.error(`${err}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async updateUser(info, payload) {
//       try {
//         const { msg, err } = await (await axios.patch(`${apiURL}user/${payload.userID}`, payload)).data
//         if (msg) {
//           info.dispatch('fetchUsers')
//         } else {
//           toast.error(`${err}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async deleteUser(info, id) {
//       try {
//         const { msg, err } = await (await axios.delete(`${apiURL}user/${id}`)).data
//         if (msg) {
//           info.dispatch('fetchUsers')
//         } else {
//           toast.error(`${err}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     // ===== LOGIN =======
//     async login(info, payload) {
//       try {
//         const { msg, result, token } = await (await axios.post(`${apiURL}user/login`, payload)).data

//         if (result) {
//           toast.success(`${msg}😎`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//           info.commit('getUser', {
//             msg,
//             result
//           })
//           cookies.get('LegitUser', { token, msg, result })
//           applyToken(token)
//           router.push({ name: 'cars' })
//         } else {
//           toast.error(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },

//     // ==== car =====
//     async fetchCars(info) {
//       try {
//         const { results } = await (await axios.get(`${apiURL}car`)).data
//         if (results) {
//           info.commit('getCars', results)
//         } else {
//           router.push({ name: 'login' })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }

//     },
//     async recentcars(info) {
//       try {
//         const { results, msg } = await (await axios.get(`${apiURL}car/recent`)).data
//         if (results) {
//           info.commit('getRecentCars', results)
//         } else {
//           toast.error(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async fetchCar(info, id) {
//       try {
//         const { result, msg } = await (await axios.get(`${apiURL}car/${id}`)).data
//         if (result) {
//           info.commit('getCar', result)
//         } else {
//           toast.error(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async addACar({ dispatch }, payload) {
//       try {
//         const { msg } = await (await axios.post(`${apiURL}car/add`, payload)).data
//         if (msg) {
//           dispatch('fetchCars')
//           toast.success(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async updateCar(info, payload) {
//       try {
//         const { msg } = await (await axios.patch(`${apiURL}car/${payload.carID}`, payload)).data
//         if (msg) {
//           info.dispatch('fetchCars')
//           toast.success(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     },
//     async deleteCar(info, id) {
//       try {
//         const { msg } = await (await axios.delete(`${apiURL}car/${id}`)).data
//         if (msg) {
//           info.dispatch('fetchCars')
//           toast.success(`${msg}`, {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_CENTER
//           })
//         }
//       } catch (e) {
//         toast.error(`${e.message}`, {
//           autoClose: 2000,
//           position: toast.POSITION.BOTTOM_CENTER
//         })
//       }
//     }

//   },
//   modules: {
//   }
// })



import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()


export default createStore({
  state: {
    users: null,
    user: null,
    cars: null,
    recentCars: null,
    car: null,
    order: null,
    orders: null
  },
  getters: {
    singleCar:(state)=>state.car
  },
  mutations: {
    getUsers(state, value) {
      state.users = value
    },
    getUser(state, value) {
      state.user = value
    },
    getCars(state, value) {
      state.cars = value
    },
    getRecentCars(state, value) {
      state.recentCars = value
    },
    getCar(state, value) {
      state.car = value
    },
    getOrder(state, value) {
      state.order = value
    },
    getOrders(state, value) {
      state.orders = value
    }
  },
  actions: {

    async fetchUser(info, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://capstoneeomp-b3n0.onrender.com/'}user/${id}`)).data
        if (result) {
          info.commit('getUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async fetchUsers(info) {
      try {
        const { results, msg } = await (await axios.get(`${'https://capstoneeomp-b3n0.onrender.com/'}user`)).data
        if (results) {
          info.commit('getUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async addUser({ dispatch }, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${'https://capstoneeomp-b3n0.onrender.com/'}user/signup`, payload)).data
        if (token) {
          dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
          // router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async updateUser(info, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${'https://capstoneeomp-b3n0.onrender.com/'}user/${payload.userID}`, payload)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION._CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteUser(info, id) {
      try {
        const { msg, err } = await (await axios.delete(`${'https://capstoneeomp-b3n0.onrender.com/'}user/${id}`)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },

    // ==================== CARS ===================
    async fetchCars(info) {
      try {
        const { results } = await (await axios.get(`${'https://capstoneeomp-b3n0.onrender.com/'}car`)).data
        if (results) {
          info.commit('getCars', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }

    },
    // async recentCars(info) {
    //   try {
    //     const { results, msg } = await (await axios.get(`${'https://capstoneeomp-b3n0.onrender.com/'}car/recent`)).data
    //     if (results) {
    //       info.commit('getRecentCars', results)
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },

    async fetchCar(info, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://capstoneeomp-b3n0.onrender.com/'}car/${id}`)).data
        if (result) {
          info.commit('getCar', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async addACar({ dispatch }, payload) {

      try {
        const { msg } = await (await axios.post(`${'https://capstoneeomp-b3n0.onrender.com/'}car/add`, payload)).data
        if (msg) {
          dispatch('fetchCars')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async updateCar(info, payload) {
      try {
        console.log(payload);
        
        const { msg } = await (await axios.patch(`${'https://capstoneeomp-b3n0.onrender.com/'}car/${payload.carID}`, payload)).data
        if (msg) {
          info.dispatch('fetchCars')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteCar(info, id) {
      try {
        console.log('here');
        
        const { msg } = await (await axios.delete(`${'https://capstoneeomp-b3n0.onrender.com/'}car/${id}`)).data
        if (msg) {
          info.dispatch('fetchCars')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    }

  },
  
  modules: {
  }
})

