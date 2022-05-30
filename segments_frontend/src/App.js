import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ margin: '40px' }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h1 style={{ textAlign: 'center', textAlignVertical: 'center' }}>
        Create Segment
      </h1>
      <Form />
    </div>
  );
}

export default App;
