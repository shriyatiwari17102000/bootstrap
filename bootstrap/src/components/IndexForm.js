// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function FormDisabledExample() {
//   return (
//     <Form>
//       {/* <fieldset disabled> */}
//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
//           <Form.Control id="disabledTextInput" placeholder="Disabled input" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
//           <Form.Select id="disabledSelect">
//             <option>Disabled select</option>
//             <option>Disabled select one</option>
//             <option>Disabled select two</option>
//           </Form.Select>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Check
//             type="checkbox"
//             id="disabledFieldsetCheck"
//             label="Can't check this"
//           />
//         </Form.Group>
//         <Button type="submit">Submit</Button>
//       {/* </fieldset> */}
//     </Form>
//   );
// }

// export default FormDisabledExample;

import Form from 'react-bootstrap/Form';

function FormFileExample() {
  return (
    <>
      {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Disabled file input example</Form.Label>
        <Form.Control type="file" disabled />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      /> */}

<Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
           <Form.Check 
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check 
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>
  
    </>
  );
}

export default FormFileExample;