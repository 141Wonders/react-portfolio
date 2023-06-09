import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Landing from './pages/Landing'
import NotFound from './components/NotFound'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route key="work" path="work" element={<Work />} />
        <Route key="skills" path="skills" element={<Skills />} />
        <Route key="contact" path="contact" element={<Contact />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
