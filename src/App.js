import './App.css';
import CheckboxExample from './components/CheckboxExample';
import Welcome from './components/Welcome';
import TextFieldExample from './components/TextFieldExample';
import MakeStyleComp from './components/MakeStyleComp';
import Container from '@material-ui/core/Container';
import GridComp from './components/GridComp';
import AppBarComp from './components/AppBarComp';
function App() {
  return (
    <Container maxWidth='md'>
      <AppBarComp />
      <div className='App'>
        <div >
          <Welcome></Welcome>
          <GridComp></GridComp> 
        </div>
        <div style={{
          backgroundColor: 'white',
          margin: '15px',
          padding: '15px'
          }}> 
          <CheckboxExample></CheckboxExample>
          <TextFieldExample></TextFieldExample>

        </div>
        <MakeStyleComp></MakeStyleComp>

      </div>
    </Container>
  );
}

export default App;
