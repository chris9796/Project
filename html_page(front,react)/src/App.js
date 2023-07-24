import './App.css';
import black_plane from './image/black_plane.jpg'
import white_plane from './image/white_plane.jpg'
import ThemeBox from './components/theme';
function App(){
  return (
    <>
    <ThemeBox className="themebox"/>
   
   <img src={black_plane} className='black_plane'/>
   
    <div className="container_button_logo">
        <div className="logo">Logo</div>   

        <div className="start">시작하기</div>      
    </div>
    
    <img src={white_plane} className='white_plane'/>
  

</>


    
  );
}

export default App;
