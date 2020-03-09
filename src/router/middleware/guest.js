import Сookie from 'cookie'

export default function guest ({ next, store }){
  const cookies = Сookie.parse(document.cookie);

  if(store.getters.auth.loggedIn || cookies.auth){
    return next({
      name: 'Orders'
    })
  }

  return next()
}
