import Сookie from 'cookie'

export default function auth ({ next, store }){
  const cookies = Сookie.parse(document.cookie);

  if(!store.getters.auth.loggedIn && !cookies.auth){
    return next({
      name: 'Login'
    })
  }

  return next()
}
