import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function VerticalExample() {
  return (
  <>
  <div className="container" gap={7}>
    {/* <Stack direction='horizontal' gap={4}>
      <div className="bg-light border ms-auto">First item</div>
      <div className="bg-light border ms-auto">Second item</div>
      <div className="bg-light border ms-auto">Third item</div>
    </Stack> */}
      <Stack gap={4} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    </div>
    </>
  );
}

export default VerticalExample;