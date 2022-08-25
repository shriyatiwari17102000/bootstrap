// // // import Form from 'react-bootstrap/Form';
// // // import InputGroup from 'react-bootstrap/InputGroup';

// // // function BasicExample() {
// // //   return (
// // //     <>
// // //       <InputGroup className="mb-3">
// // //         <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
// // //         <Form.Control
// // //           placeholder="Username"
// // //           aria-label="Username"
// // //           aria-describedby="basic-addon1"
// // //         />
// // //       </InputGroup>

// // //       <InputGroup className="mb-3">
// // //         <Form.Control
// // //           placeholder="Recipient's username"
// // //           aria-label="Recipient's username"
// // //           aria-describedby="basic-addon2"
// // //         />
// // //         <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
// // //       </InputGroup>

// // //       <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
// // //       <InputGroup className="mb-3">
// // //         <InputGroup.Text id="basic-addon3">
// // //           https://example.com/users/
// // //         </InputGroup.Text>
// // //         <Form.Control id="basic-url" aria-describedby="basic-addon3" />
// // //       </InputGroup>

// // //       <InputGroup className="mb-3">
// // //         <InputGroup.Text>$</InputGroup.Text>
// // //         <Form.Control aria-label="Amount (to the nearest dollar)" />
// // //         <InputGroup.Text>.00</InputGroup.Text>
// // //       </InputGroup>

// // //       <InputGroup>
// // //         <InputGroup.Text>With textarea</InputGroup.Text>
// // //         <Form.Control as="textarea" aria-label="With textarea" />
// // //       </InputGroup>
// // //     </>
// // //   );
// // // }

// // // export default BasicExample;

// // import Dropdown from 'react-bootstrap/Dropdown';
// // import Form from 'react-bootstrap/Form';
// // import InputGroup from 'react-bootstrap/InputGroup';
// // import SplitButton from 'react-bootstrap/SplitButton';
// // import FloatingLabel from 'react-bootstrap/FloatingLabel';

// // function SegmentedButtonDropdownsExample() {
// //   return (
// //     <>
// //       <InputGroup className="mb-3">
// //         <SplitButton
// //           variant="outline-secondary"
// //           title="Action"
// //           id="segmented-button-dropdown-1"
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </SplitButton>
// //         <Form.Control aria-label="Text input with dropdown button" />
// //       </InputGroup>

// //       <InputGroup className="mb-3">
// //         <Form.Control aria-label="Text input with dropdown button" />
// //         <SplitButton
// //           variant="outline-secondary"
// //           title="Action"
// //           id="segmented-button-dropdown-2"
// //           alignRight
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </SplitButton>
// //       </InputGroup>
// //       <FloatingLabel
// //         controlId="floatingInput"
// //         label="Email address"
// //         className="mb-3"
// //       >
// //         <Form.Control type="email" placeholder="name@example.com" />
// //       </FloatingLabel>
// //       <FloatingLabel controlId="floatingPassword" label="Password">
// //         <Form.Control type="password" placeholder="Password" />
// //       </FloatingLabel>
// //     </>
// //   );
// // }

// // export default SegmentedButtonDropdownsExample;




// import Col from 'react-bootstrap/Col';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function FormFloatingLayoutExample() {
//   return (
//     <Row className="g-2">
//       <Col md>
//         <FloatingLabel controlId="floatingInputGrid" label="Email address">
//           <Form.Control type="email" placeholder="name@example.com" />
//         </FloatingLabel>
//       </Col>
//       <Col md>
//         <FloatingLabel
//           controlId="floatingSelectGrid"
//           label="Works with selects"
//         >
//           <Form.Select aria-label="Floating label select example">
//             <option>Open this select menu</option>
//             <option value="1">One</option>
//             <option value="2">Two</option>
//             <option value="3">Three</option>
//           </Form.Select>
//         </FloatingLabel>
//       </Col>
//     </Row>
//   );
// }

// export default FormFloatingLayoutExample;



import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;