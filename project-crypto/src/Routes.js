import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContainerCoin from './pages/ContainerCoin'
import ContainerListCoins from './pages/ContainerListCoins'


const Routes = ()=>{
    return (
        <Switch>
            <Route exact path='/' component={ContainerListCoins} />
            <Route path='/coins/:id' component={ContainerCoin}/>
        </Switch>
    )
}

export default Routes