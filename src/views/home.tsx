import { useNavigate } from 'react-router-dom';

function App() {
  const navigateTo = useNavigate()
  
  const isUserLoggedIn = () => {
    return localStorage.getItem('loggedIn') === 'true'
  }

  const logout = () => {
    // fake step to remove authentication data and log user out
    localStorage.removeItem('loggedIn')
    navigateTo('/login')
  }

  return (
    <div className="flex w-full items-center justify-center h-screen">
      {isUserLoggedIn() ? (
        <div>
          <h1>Welcome Maryam!</h1>
            <button
                type="submit"
                onClick={logout}
                className="
                    flex 
                    w-full 
                    align-center 
                    justify-center 
                    rounded-md 
                    bg-white 
                    text-slate-500 
                    px-3 
                    py-1.5 
                    text-sm 
                    font-semibold 
                    leading-6 
                    border-slate-200
                    border-y border-x
                    shadow-sm 
                    hover:bg-gray-50
                    focus-visible:outline 
                    focus-visible:outline-2 
                    focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600
                    ">
                Logout 
            </button>
        </div>
      ) : (
        <div className="w-96 align-center justify-center">
            <button
                type="submit"
                onClick={() => navigateTo('/login')}
                className="
                    flex 
                    w-full 
                    align-center 
                    justify-center 
                    rounded-md 
                    bg-white 
                    text-slate-500 
                    px-3 
                    py-1.5 
                    text-sm 
                    font-semibold 
                    leading-6 
                    border-slate-200
                    border-y border-x
                    shadow-sm 
                    hover:bg-gray-50
                    focus-visible:outline 
                    focus-visible:outline-2 
                    focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600
                    ">
                Login 
            </button>
        </div>
      )}
    </div>
  )
}

export default App
