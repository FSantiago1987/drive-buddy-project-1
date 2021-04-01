import styled from "styled-components";
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive";
// from https://www.npmjs.com/package/react-custom-checkbox
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import Barney from "../../images/Barney.jpg";
import { Component } from "react";

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
    this.state = {
      name: "",
      email: "",
      dateOfBirth: "",
      password: "",
      profilePicture: "",
      profileRole: "",
      gender: "",
      messages: [],
      languages: [],
      documents: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const updatedUser = {...this.state};
    this.props.updateUser(updatedUser);
  }

  handleDelete(evt) {
    evt.preventDefault();
  }
  render() {
    return (
      <BoxContainer>
        <FormContainer onclick={this.handleSubmit}>
          <ContentContainer>
            <LabelProfile>Your Name</LabelProfile>
            <Input
              name="name"
              id="name"
              value={this.state.name !== "" ? this.state.name : "Barney Stinson" }
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="2em" />
            <LabelProfile>Profile picture</LabelProfile>
            <PictureBox>
              <img
                src={
                  this.state.profilePicture !== ""
                    ? this.state.profilePicture
                    : Barney
                }
                alt="Barney"
                onChange={this.handleChange}
              />
            </PictureBox>
          </ContentContainer>
          <Marginer direction="horizontal" margin="8em" />
          <ContentContainer>
            <LabelProfile>Your Email</LabelProfile>
            <Input
              placeholder={
                this.state.email !== ""
                  ? this.state.email
                  : "awesome@legendary.com"
              }
              type="text"
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="2em" />
            <LabelProfile>Chosen Profile</LabelProfile>
            <LabelResponseProfile>
              ✔{" "}
              {this.state.profileRole !== ""
                ? this.state.profileRole
                : "Instructior Applicant"}
            </LabelResponseProfile>
            <Marginer direction="vertical" margin="2em" />
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
              value={
                this.state.profilePicture !== ""
                  ? this.state.profilePicture
                  : "1975-07-23"
              }
              onChange={this.handleChange}
            />
            <Marginer direction="vertical" margin="2em" />
            <LabelProfile>Gender</LabelProfile>
            <LabelResponseProfile>
              ✔ {this.state.gender !== "" ? this.state.gender : "Male"}
            </LabelResponseProfile>
            <Marginer direction="vertical" margin="2em" />
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
            <Marginer direction="vertical" margin="2em" />
            <LabelProfile>Confirm your password</LabelProfile>
            <Input placeholder="*******" type="password" />
            <Marginer direction="vertical" margin="2.5em" />
            <SubmitButton>Update Profile</SubmitButton>
            <Marginer direction="vertical" margin="2em" />
            <DeleteButton onclick={this.handleDelete}>Delete Profile</DeleteButton>
          </ContentContainer>
        </FormContainer>
      </BoxContainer>
    );
  }
}
export default FormProfile;
