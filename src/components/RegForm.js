import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import bestie from "../assests/bestie.jpg";

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    fb: "",
    email: "",
    eClass: "",
    address: "",
    eduBG: "",
  });

  const { name, age, phone, fb, email, eClass, address, eduBG } = formData;

  const [submit, setSubmit] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://v1.nocodeapi.com/bestiekorean/google_sheets/vbvqdTwinfpjMNCA",
      params: { tabId: "Sheet1" },
      data: [
        [
          name,
          age,
          phone,
          fb,
          email,
          eClass,
          address,
          eduBG,
          new Date().toLocaleString(),
        ],
      ],
    })
      .then((res) => {
        console.log(res);
        setFormData({
          ...formData,
          name: "",
          age: "",
          phone: "",
          fb: "",
          email: "",
          eClass: "",
          address: "",
          eduBG: "",
        });
        setSubmit(true);
        setTimeout(() => setSubmit(false), 3000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <FormContainer>
      <SubHeader>
        <Logo>
          <img src={bestie} />
        </Logo>
        <h3>Bestie Korean Club</h3>
      </SubHeader>

      <Header>Student Registration Form</Header>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            id="name"
            autoComplete="off"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </Field>
        <Field>
          <Label htmlFor="age">Age</Label>
          <Input
            name="age"
            type="number"
            id="age"
            autoComplete="off"
            onChange={handleChange}
            value={formData.age}
            required
          />
        </Field>
        <Field>
          <Label htmlFor="ph">Phone</Label>
          <Input
            name="phone"
            type="tel"
            id="ph"
            autoComplete="off"
            onChange={handleChange}
            value={formData.phone}
            required
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            autoComplete="off"
          />
        </Field>
        <Field>
          <Label htmlFor="fb">Facebook Acc</Label>
          <Input
            name="fb"
            type="text"
            id="fb"
            autoComplete="off"
            onChange={handleChange}
            value={formData.fb}
            required
          />
        </Field>
        <Field>
          <Label htmlFor="class">Class</Label>
          <Select name="eClass" onChange={handleChange} id="class" required>
            <option value="">Please select</option>
            <option value="beginner">Beginner</option>
            <option value="level1-1">Level 1-1</option>
            <option value="level1-2">Level 1-2</option>
            <option value="level2-1">Level 2-1</option>
            <option value="level2-2">Level 2-2</option>
            <option value="level3-1">Level 3-1</option>
            <option value="level3-2">Level 3-2</option>
          </Select>
        </Field>
        <Field style={{ gridColumn: "1/-1" }}>
          <Label htmlFor="address">Address</Label>
          <Textarea
            name="address"
            id="address"
            rows="3"
            column="33"
            onChange={handleChange}
            value={formData.address}
            required
          ></Textarea>
        </Field>
        <Field style={{ gridColumn: "1/-1" }}>
          <Label htmlFor="eduBg">Educational Background</Label>
          <Textarea
            name="eduBG"
            id="eduBg"
            rows="3"
            column="33"
            onChange={handleChange}
            value={formData.eduBG}
            required
          ></Textarea>
        </Field>
        <Button type="submit">{!submit ? "Submit" : "Submitted"}</Button>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 600px;
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(178, 24, 7, 0.2);
`;

const Header = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: rgba(178, 24, 7);
  padding-bottom: 10px;
  box-shadow: 0 3px 1px rgba(152, 125, 123, 0.2);
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 10px;
  margin: 20px 0;
  box-shadow: 3px 3px 1px rgba(152, 125, 123, 0.2);

  && h3 {
    text-transform: uppercase;
    color: rgba(178, 24, 7);
    letter-spacing: 1.3px;
  }
`;

const Logo = styled.div`
  width: 50px;
  heigth: 50px;
  border-radius: 50%;
  border: 2px solid rgba(200, 24, 7);
  && img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: translate(0, 3%);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  row-gap: 20px;
  column-gap: 30px;
`;
const Field = styled.div``;
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  border: 1px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
`;

const Select = styled.select`
  border: 1px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  grid-column: 2/-1;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: palevioletred;
    border: 2px solid palevioletred;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default RegForm;
