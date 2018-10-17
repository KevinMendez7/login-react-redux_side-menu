import React, {Component} from 'react'
import { Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from '../../../_actions/alert-actions';
import {userActions} from '../../../_actions/user-actions'
import { PrivateRoute } from '../../../entries/private-route';
import {history} from '../../../util/history'
import {Login} from '../../login/container/login'
import Document from '../../modules/container/documents-container'
import { PrivateRouteTest }  from '../../../entries/private-route-test'

class Home extends Component{
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });

    this.logoutClick = this.logoutClick.bind(this)

  }

  logoutClick(){
    this.props.dispatch(userActions.logout())
    location.reload(true)
  }

  render(){
    const { alert } = this.props;
    return (
        <Router history={history}>
          <div>
            <PrivateRouteTest exact path="/" component={Document} logoutClick={this.logoutClick} />
            <Route path="/Login" component={Login} />
          </div>
        </Router>
    );
  }

}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(Home);
export { connectedApp as Home };
