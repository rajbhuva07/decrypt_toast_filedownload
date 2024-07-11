import React, { useEffect, useLayoutEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Formdata = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    address: '',
    descrption: '',
    city: '',
    state: ''
  });
  const [userdata, setUserData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const storedata = JSON.parse(localStorage.getItem('user')) || [];
    setUserData(storedata);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name===================", name)
    console.log("value===================", value)

    setUser({ ...user, [name]: value });
  };
 const handleFormValidation = (data) => {
  const error = {};
  if (!data.email.trim()) {
    error.email = 'email is required';
  }
  if (!data.password.trim()) {
    error.password = 'password is required';
  }
  if (!data.address.trim()) {
    error.address = 'address is required';
  }
  if (!data.city.trim()) {
    error.city = 'city is required';
  }
  if (!data.state.trim()) {
    error.state = 'state is required';
  }
  return error;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = handleFormValidation(user);
    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
     
      console.log('Form submitted successfully!');
      const data = [...userdata, user];
      localStorage.setItem('user', JSON.stringify(data));
      setUserData(data);
      setUser({
        email: '',
        password: '',
        address: '',
        descrption: '',
        city: '',
        state: ''
      });
    } else {
      console.log(`Form submission failed
       due to validation errors.`);
    }

  };

  return <>
    <div>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3" >
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={user.email} />
            {error.email &&
              <span className="error-message">
               <span style={{ color: 'red' }}>{error.email}</span>
              </span>
            }
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password} />
            {error.password &&
              <span className="error-message">
                <span style={{ color: 'red' }}>{error.password}</span>
              </span>
            }
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name='address' onChange={handleChange} value={user.address} />
          {error.address &&
              <span className="error-message">
                 <span style={{ color: 'red' }}>{error.address}</span>
              </span>
            }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>descrption</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" name='descrption' onChange={handleChange} value={user.descrption} />
          {error.descrption &&
              <span className="error-message">
                <span style={{ color: 'red' }}> {error.descrption}</span>
              </span>
            }
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name='city' onChange={handleChange} value={user.city} />
            {error.city &&
              <span className="error-message">
                 <span style={{ color: 'red' }}>{error.city}</span>
              </span>
            }
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." name='state' onChange={handleChange} value={user.state}>
              <option defaultValue={''}>Choose...</option>
              <option value={'gujrat'}>Gujrat</option>
              <option value={'mahrshtra'}>mahrshtra</option>
              <option value={'bihar'}>Bihar</option>

            </Form.Select>
            {error.state &&
              <span className="error-message">
                <span style={{ color: 'red' }}> {error.state}</span>
              </span>
            }
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <table>
      <thead>
        <tr>
          <th>no</th>
          <th>email</th>
          <th>password</th>
          <th>address</th>
          <th>descrption</th>
          <th>city</th>
          <th>state</th>

        </tr>
      </thead>
      <tbody>
        {userdata.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.address}</td>
            <td>{data.descrption}</td>
            <td>{data.city}</td>
            <td>{data.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default Formdata
