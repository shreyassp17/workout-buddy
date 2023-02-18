import { useAuthContext } from './UseAuthContext'
import { useWorkoutsContext } from './UseWorkoutsContext'

export const UseLogout = () => {

  const { dispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = useWorkoutsContext()
  const logout = () => {

    //dispatch logout action
    dispatch({ type: 'LOGOUT' })
    workoutsDispatch({ type: 'SET_WORKOUTS', payload: null })

    //remove user from storage
    localStorage.removeItem("user")
  }

  return { logout }
}
