import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div id='container'>
                <header><NavLink exact to='/'>Home</NavLink></header>
                <Menu/>
                <section id='main'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/first' component={First} />
                        <Route path='/second' component={Second} />
                        <Route path='/third' component={Third} />
                        <Route component={NoMatch} />
                    </Switch>
                </section>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}

class Menu extends Component {
    render() {
        return (
            <div id='menu'>
                <ul>
                    <li><NavLink to='/first'>First</NavLink></li>
                    <li><NavLink to='/second'>Second</NavLink></li>
                    <li><NavLink to='/third'>Third</NavLink></li>
                </ul>
            </div>
        );
    }
}

class First extends Component {
    render() {
        return (
            <p>First</p>
        );
    }
}

class Second extends Component {
    render() {
        return (
            <p>Second</p>
        );
    }
}

class Third extends Component {
    render() {
        return (
            <p>Third</p>
        );
    }
}

class Home extends Component {
    render() {
        return null;
    }
}

class NoMatch extends Component {
    render() {
        return (
            <p>404</p>
        );
    }
}

export default App;
