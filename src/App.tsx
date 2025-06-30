/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'

function App() {

  return (    
      <div>
       <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          Card Content
        </CardContent>
        <CardFooter>
          Card Footer
        </CardFooter>
      </Card>
      </div>
  )
}

export default App
