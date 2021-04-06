import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Footer } from '../../components/footer'
import { Marginer } from '../../components/marginer'
import Navbar from '../../components/navbar'
import { PageContainer } from '../../components/pageContainer'
import { TopUsersList } from './topUsersList'

class UsersList extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (<PageContainer>
      <TopUsersList>
        <Navbar useTransparent />
      </TopUsersList>
      <Marginer direction="vertical" margin="2em" />
      <Footer />
    </PageContainer>)
  }
}

UsersList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(UsersList);