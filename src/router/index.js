// Dependencies
import { Switch } from 'react-router-dom'

// Custom Wrapper
import RouteWrapper from './route'

// Pages
import { Auth, Dashboard } from 'pages'

// Routes
export default function Router() {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={Dashboard} isPrivate/>
      <RouteWrapper path="/auth" component={Auth} />
      <RouteWrapper path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  )
}