import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Footer } from '../../components/footer'
import { Marginer } from '../../components/marginer'
import Navbar from '../../components/navbar'
import { PageContainer } from '../../components/pageContainer'
import { TopSearchInstructor } from './topSearchInstructor'

class SearchInstructor extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (<PageContainer>
      <TopSearchInstructor>
        <Navbar useTransparent />
      </TopSearchInstructor>
      <Marginer direction="vertical" margin="2em" />
      <Footer />
    </PageContainer>)
  }
}

SearchInstructor.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(SearchInstructor);