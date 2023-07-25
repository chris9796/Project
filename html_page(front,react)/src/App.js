import './App.css';
import black_plane from './image/black_plane.jpg'
import white_plane from './image/white_plane.jpg'
<<<<<<< HEAD
import Theme from './components/theme'


=======
import ThemeBox from './components/theme';
>>>>>>> 3bb966b6e02c492d7d1d88688ffdcf94b47b7f98
function App(){
  return (
    <>
    <ThemeBox className="themebox"/>
   
   <img src={black_plane} className='black_plane'/>
  <Theme></Theme>


    <div className="container_button_logo">
        <div className="logo">Logo</div>   
<<<<<<< HEAD
    
        <div className="start" onClick={()=>{
          document.querySelector().style.display = 'block';
        }}>시작하기</div>      
=======

        <div className="start">시작하기</div>      
>>>>>>> 3bb966b6e02c492d7d1d88688ffdcf94b47b7f98
    </div>
    
    <img src={white_plane} className='white_plane'/>
</>


    
  );
}

export default App;
