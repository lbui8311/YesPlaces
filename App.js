import bg from './petplacebg.png';
import Grid1 from "./components/Grid1";
function App() {
  return (
    <div style={{ backgroundColor:'#ffffe0' ,backgroundImage: `url({bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <Grid1 />
    </div>
  );
}

export default App;
