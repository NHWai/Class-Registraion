import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import bestie from "../assests/bestie.jpg";

const RegForm = ({ handleDark }) => {
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
      params: { tabId: "May" },
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

  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <FormContainer
      style={{
        color: dark ? "#fff" : "#000",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            onChange={() => {
              setDark((pre) => !pre);
              handleDark();
            }}
            type="checkbox"
            id="dk"
            style={{ marginRight: "5px" }}
          />
          <label style={{ fontSize: "12px" }} htmlFor="dk">
            Dark Mode
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            onChange={() => setToggle((pre) => !pre)}
            type="checkbox"
            id="kor"
            style={{ marginRight: "5px" }}
          />
          <label style={{ fontSize: "12px" }} htmlFor="kor">
            Read in Korean
          </label>
        </div>
      </div>

      <SubHeader
        style={{
          boxShadow: dark
            ? " 1px 1px 5px 5px rgba(255, 255, 255, 0.5)"
            : " 3px 3px 1px rgba(152, 125, 123, 0.2)",
        }}
      >
        <Logo>
          <img src={bestie} />
        </Logo>
        <h3>Bestie Korean Club</h3>
      </SubHeader>

      <Header
        style={{
          boxShadow: dark
            ? " 0 0 5px 5px rgba(255, 255, 255, 0.5)"
            : " 0 3px 1px rgba(152, 125, 123, 0.2)",
        }}
      >
        Student Registration Form
      </Header>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">{toggle ? "이름" : "Name"}</Label>
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
          <Label htmlFor="age">{toggle ? "나이" : "Age"}</Label>
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
          <Label htmlFor="ph">{toggle ? "전화 번호" : "Phone"}</Label>
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
          <Label htmlFor="email">{toggle ? "이메일" : "Email"}</Label>
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
          <Label htmlFor="fb">
            {toggle ? "페이스 북 계정" : "Facebook Acc"}
          </Label>
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
          <Label htmlFor="class">{toggle ? "수업" : "Class"}</Label>
          <Select name="eClass" onChange={handleChange} id="class" required>
            <option value="">Please select</option>
            <option value="basic-Sec-A">Basic Section A</option>
            <option value="basic-Sec-B">Basic Section B</option>
            <option value="basic-Sec-C">Basic Section C</option>
            <option value="basic-Sec-D">Basic Section D</option>
            <option value="lvl1-1">Level 1-1</option>
            <option value="lvl1-2">Level 1-2</option>
          </Select>
        </Field>
        <Field style={{ gridColumn: "1/-1" }}>
          <Label htmlFor="address">{toggle ? "주소" : "Address"}</Label>
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
          <Label htmlFor="eduBg">
            {toggle ? "교육 배경" : "Educational Background"}
          </Label>
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
        {toggle ? (
          <Button type="submit">{!submit ? "제출하다" : "제출된"}</Button>
        ) : (
          <Button type="submit">{!submit ? "Submit" : "Submitted"}</Button>
        )}
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 600px;
  padding: 10px 30px;
  border-radius: 10px;
`;

const Header = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: rgba(178, 24, 7);
  padding-bottom: 10px;
  padding: 10px 0;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 10px;
  margin: 20px 0;
  padding: 10px 0;

  // box-shadow: 3px 3px 1px rgba(152, 125, 123, 0.2);

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
