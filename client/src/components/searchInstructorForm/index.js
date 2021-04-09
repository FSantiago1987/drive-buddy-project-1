import styled from "styled-components";
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive";
import React, { Component } from "react";
import Select from "react-select";
import classnames from "classnames";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Rating from '@material-ui/lab/Rating';
import "./stylesSearch.css"
import axios from "axios";

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 6px !important;
  width: 200px !important;
  height: 25px !important;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 8%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-right: 0;
    width: 100%;
  }
`;

const selectInstructor = styled(Select)`
    position: relative;
    box-sizing: border-box;
    width: 100px;
`;

// function CustomizedRating() {
//   console.log('aaaaaaaaaaaaaaaaaa' + value)
//   const [value, setValue] = React.useState(2);
//   return (
//     <Box component="fieldset" mb={3} borderColor="transparent">
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//   );
// }

class FormSearchInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      language: "",
      rate: "",
      errors: {},
      items: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.httpItems = this.httpItems.bind(this);
    
  }

  componentDidMount(){
    this.httpItems();
  }

  httpItems(){
    axios.get("/api/users/instructors")
    .then(res => {
      if(res.status === 200){
        this.setState({items: res.data});
      }
    }) 
    .catch(err =>{}
    );
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  instructorTable(users) {

    return (
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.first_name}>
              <TableCell>{user.first_name+" "+user.last_name}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><Rating value={5} readOnly /></TableCell>
              <TableCell><VisibilityIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
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
            <Marginer direction="horizontal" margin="1em" />
            <ContentContainer>
              <Label>Gender</Label>
              <Select
                onChange={(e) => { this.setState({ rate: e.value }) }}
                error={errors.gender}
                id="gender"
                type="text"
                placeholder="Gender"
                isSearchable={false}
                clearable={false}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
                className={classnames("", {
                  invalid: errors.gender
                })}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="1em" />
            <ContentContainer>
              <Label>Language</Label>
              <Select
                onChange={(e) => { this.setState({ rate: e.value }) }}
                error={errors.language}
                id="language"
                type="text"
                placeholder="Language"
                isSearchable={false}
                clearable={false}
                options={[
                  { value: '1', label: 'English' },
                  { value: '2', label: 'French' },
                  { value: '3', label: 'Spanish' },
                ]}
                className={classnames("", {
                  invalid: errors.language
                })}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="1em" />
            <ContentContainer>
              <Label>Rate</Label>
              <Select
                onChange={(e) => { this.setState({ rate: e.value }) }}
                error={errors.rate}
                id="rate"
                type="text"
                placeholder="Rate"
                isSearchable={false}
                clearable={false}
                options={[
                  { value: '1', label: 'Above 1' },
                  { value: '2', label: 'Above 2' },
                  { value: '3', label: 'Above 3' },
                  { value: '4', label: 'Above 4' },
                  { value: '5', label: 'Above 5' }
                ]}
                className={classnames("", {
                  invalid: errors.rate
                })}
              />
            </ContentContainer>
            <Marginer direction="horizontal" margin="1em" />
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
            {this.instructorTable(this.state.items)}
          </TableContainer>
        </BoxContainer>
      </div>
    );
  }
}

export default FormSearchInstructor;