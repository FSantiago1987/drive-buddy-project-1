import styled from "styled-components";
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive";
import { updateUser, deleteUser, logoutUser } from "../../actions/authActions";
// from https://www.npmjs.com/package/react-custom-checkbox
import { withRouter } from 'react-router-dom';
import Checkbox from "react-custom-checkbox";
import { connect } from "react-redux";
import * as Icon from "react-icons/fi";
import { Component } from "react";
import axios from "axios";

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 0.2rem !important;
  width: 200px !important;
  height: 30px;
  border-radius: 0.3rem !important;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: #fff !important;

  &::placeholder {
    color: ${(props) => props.inputColor || "palevioletred"};
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  padding: 11px 20%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(1, 163, 164, 1) 30%,
    rgba(2, 0, 36, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

const DeleteButton = styled.button`
  width: 200px;
  padding: 11px 20%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(227, 78, 78);
  background: linear-gradient(
    90deg,
    rgba(227, 78, 78, 1) 0%,
    rgba(171, 10, 10, 0.8326681014202556) 30%,
    rgba(66, 2, 7, 0.8914916308320203) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

const UploadButton = styled.button`
  width: 80%;
  padding: 10px 20%;
  margin: 10px auto;
  justify-content:flex-end;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border: none;
  border-radius: 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(1, 163, 164, 1) 30%,
    rgba(2, 0, 36, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

const LabelProfile = styled.label`
  font-size: 1.1rem;
  color: #fff;
  text-align: left;
  margin-bottom: 10px;
  font-weight: 600;
`;

const LabelResponseProfile = styled.label`
  font-size: 1rem;
  color: #fff;
  text-align: left;
  margin-bottom: 10px;
`;

const PictureBox = styled.div`
  width: 205px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    border: 4px solid #fff;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;

  &:not(:last-of-type) {
    margin-right: 8%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-right: 0;
    width: 100%;
  }
`;

class FormProfile extends Component {
  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.userData);
    const { 
      first_name = "", 
      last_name = "",
      email = "",
      dateOfBirth = "",
      user_type = "",
      password = "",
      profilePicture = "",
      gender = "",
      messages = [],
      languages = [],
      documents = [],
    } = this.userData;
    this.state = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      dateOfBirth: dateOfBirth,
      password: "",
      profilePicture: profilePicture,
      profileRole: user_type,
      gender: gender,
      messages: messages,
      languages: languages,
      documents: documents,
      selectedFile: {
        preview: profilePicture,
        raw: ""
      },
      pictureChanged: false
    };
    console.log(this.userData);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.profileImageHandler = this.profileImageHandler.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }


  profileImageHandler(evt){
    if(evt.target.files.length) {
      this.setState(prevState => ({
        selectedFile: {
          ...prevState.selectedFile,
          preview: URL.createObjectURL(evt.target.files[0]),
          raw: evt.target.files[0]
        },
        pictureChanged: {...prevState.pictureChanged, pictureChanged: true}
      }))
    }
  }


  handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.selectedFile.raw);
    axios.post("/api/users/upload", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({pictureChanged: false})
  };


  handleSubmit(evt) {
    const updatedUser = {
      _id: this.userData._id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      // password: "",
      profilePicture: this.state.profilePicture,
    };
    if(this.state.profileRole === "instructor"){
      Object.assign(updateUser, {messages: this.state.messages, languages: this.state.languages, documents: this.state.documents,})
    }
    this.props.updateUser(updatedUser, this.props.history); 
  }

  handleDelete(evt) {
    this.props.deleteUser({_id:this.userData._id}, this.props.history);
    this.props.logoutUser(); 
  }
  render() {
    return (
      <BoxContainer>
        <FormContainer>
          <ContentContainer>
            <LabelProfile>First Name</LabelProfile>
            <Input
              name="first_name"
              id="first_name"
              value={this.state.first_name }
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="0.5em" />
            <LabelProfile>Last Name</LabelProfile>
            <Input
              name="last_name"
              id="last_name"
              value={this.state.last_name }
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="0.5em" />
            <LabelProfile>Profile picture</LabelProfile>
            <PictureBox>
            <label htmlFor="upload-button">
              {this.state.selectedFile.preview ? (
                  <img
                  src={this.state.selectedFile.preview}
                  alt="Profile"
                  onChange={this.handleChange}
                />
              ) : (
                <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="text-center">Upload your photo</h5>
                </>                
              )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none"}}
                onChange={this.profileImageHandler}
                accept=".jpg"
              />
            </PictureBox>
            {this.state.pictureChanged && (
              <UploadButton onClick={this.handleUpload}>Upload Picture</UploadButton>
            )}
          </ContentContainer>
          <Marginer direction="horizontal" margin="8em" />
          <ContentContainer>
            <LabelProfile>Your Email</LabelProfile>
            <Input
              placeholder={ this.state.email }
              type="text"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="3em" />
            <LabelProfile>Chosen Profile</LabelProfile>
            <LabelResponseProfile>
              ✔{" "}
              {this.state.profileRole }
            </LabelResponseProfile>
            <Marginer direction="vertical" margin="3em" />
            <LabelProfile>Languages</LabelProfile>
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="English"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="French"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="Spanish"
              onChange={this.handleChange}
            />
          </ContentContainer>
          <Marginer direction="horizontal" margin="8em" />
          <ContentContainer>
            <LabelProfile>Date of birth</LabelProfile>
            <Input
              type="date"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="3em" />
            <LabelProfile>Gender</LabelProfile>
            <LabelResponseProfile>
              ✔ {this.state.gender !== "" ? this.state.gender : "Rather not say"}
            </LabelResponseProfile>
            <Marginer direction="vertical" margin="3em" />
            <LabelProfile>Instructors documents</LabelProfile>
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="Driver License"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="Car's Document"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="1em" />
            <Checkbox
              icon={<Icon.FiCheck color="#fff" size={20} />}
              borderColor="#fff"
              style={{ cursor: "pointer" }}
              labelStyle={{
                marginLeft: 5,
                userSelect: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
              label="Instructor License"
              onChange={this.handleChange}
            />
          </ContentContainer>
          <Marginer direction="horizontal" margin="8em" />
          <ContentContainer>
            <LabelProfile>Update your password</LabelProfile>
            <Input placeholder="*******" type="password" />
            <Marginer direction="vertical" margin="2.2em" />
            <LabelProfile>Confirm your password</LabelProfile>
            <Input placeholder="*******" type="password" />
            <Marginer direction="vertical" margin="4em" />
            <SubmitButton type="button" onClick={this.handleSubmit}>Update Profile</SubmitButton>
            <Marginer direction="vertical" margin="2.5em" />
            <DeleteButton type="button" onClick={this.handleDelete}>Delete Profile</DeleteButton>
          </ContentContainer>
        </FormContainer>
        
      </BoxContainer>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(connect(
  mapStateToProps,
  { updateUser, deleteUser, logoutUser }
)(FormProfile));
