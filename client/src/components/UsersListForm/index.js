import styled from "styled-components";
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive";
import React, { Component } from "react";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


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

const Label = styled.label`
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

const users = [
  { name: 'Name 1', role: 'License Applicant', userStatus: 'Approved', email: 'a@a.com'},
  { name: 'Name 2', role: 'Instructor', userStatus: 'Approved', email: 'a@a.com'},
  { name: 'Name 3', role: 'Instructor Applicant', userStatus: 'Waiting', email: 'a@a.com'},
];

function InstructorTable() {

  return (
    <TableContainer component={Paper}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>User Status</th>
            <th>Email</th>
            <th>View Profile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr>
              <td key={{ idx }}>{user.name}</td>
              <td key={{ idx }}>{user.role}</td>
              <td key={{ idx }}>{user.userStatus}</td>
              <td key={{ idx }}>{user.email}</td>
              <td key={{ idx }}><FontAwesomeIcon icon={faEye}/></td>
              <td key={{ idx }}><FontAwesomeIcon icon={faTrashAlt}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

class FormSearchInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role: "",
      userStatus: "",
      email: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const updatedUser = { ...this.state };
    this.props.updateUser(updatedUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <BoxContainer>
          <FormContainer onclick={this.handleSubmit}>
            <ContentContainer>
              <Label>Search by Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="8em" />
            <ContentContainer>
              <Label>Search by Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="a@a.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="8em" />
            <ContentContainer>
              <Label>Search by Status</Label>
              <FormControl component="fieldset">
                <RadioGroup aria-label="userStatus" name="userStatus" value={this.state.userStatus} onChange={this.handleChange}>
                  <FormControlLabel value="approved" control={<Radio />} label="Approved" />
                  <FormControlLabel value="waiting" control={<Radio />} label="Waiting" />
                </RadioGroup>
              </FormControl>
            </ContentContainer>
            <Marginer direction="horizontal" margin="8em" />
            <ContentContainer>
              <Label>Search by Role</Label>
              <FormControl component="fieldset">
                <RadioGroup aria-label="role" name="role" value={this.state.role} onChange={this.handleChange}>
                  <FormControlLabel value="licenseApplicant" control={<Radio />} label="License Applicant" />
                  <FormControlLabel value="instructorApplicant" control={<Radio />} label="Instructor Applicant" />
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                </RadioGroup>
              </FormControl>
            </ContentContainer>
            <Marginer direction="horizontal" margin="8em" />
            <ContentContainer>
              <Marginer direction="vertical" margin="2.5em" />
              <SubmitButton>Search</SubmitButton>
            </ContentContainer>
          </FormContainer>
        </BoxContainer>
        <BoxContainer>
          <TableContainer>
            <br></br>
            <br></br>
            {InstructorTable()}
          </TableContainer>
        </BoxContainer>
      </div>
    );
  }
}
export default FormSearchInstructor;