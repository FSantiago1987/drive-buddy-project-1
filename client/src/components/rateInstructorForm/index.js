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

const TableContainer = styled.div`
font-size: 1.1rem;
color: #fff;
text-align: center;
margin-bottom: 10px;
font-weight: 100;
`;

function UserList() {
  const users = [
    { name: 'Name 1', date: '01/01/1900', rating: '5', comments: 'comment 1' },
    { name: 'Name 2', date: '01/01/1900', rating: '5', comments: 'comment 2' },
    { name: 'Name 3', date: '01/01/1900', rating: '5', comments: 'comment 3' },
  ];

  return (
    <table>
      <td>
        <th>Name</th>
        {users.map((user, idx) => (
          <tr key={{ idx }}>{user.name}</tr>
        ))}
      </td>
      <td>
        <th>Date</th>
        {users.map((user, idx) => (
          <tr key={{ idx }}>{user.date}</tr>
        ))}
      </td>
      <td>
        <th>Rating</th>
        {users.map((user, idx) => (
          <tr key={{ idx }}>{user.rating}</tr>
        ))}
      </td>
      <td>
        <th>Comments</th>
        {users.map((user, idx) => (
          <tr key={{ idx }}>{user.comments}</tr>
        ))}
      </td>
    </table>
  );
}

class FormRateInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
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
    return (
      <div>
        <BoxContainer>
          <FormContainer onclick={this.handleSubmit}>
            <ContentContainer>
              <Label>Search by Name</Label>
              <Input
                name="name"
                id="name"
                value={this.state.name !== "" ? this.state.name : "kneau Reeves"}
                onChange={this.handleChange}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="8em" />
            <ContentContainer>
              <Label>Search by date</Label>
              <Input
                type="date"
                value={
                  this.state.profilePicture !== ""
                    ? this.state.profilePicture
                    : "2018-05-12"
                }
                onChange={this.handleChange}
              />
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
            {UserList()}
          </TableContainer>
        </BoxContainer>
      </div>
    );
  }
}
export default FormRateInstructor;