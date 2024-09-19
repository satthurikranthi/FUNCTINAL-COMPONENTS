import logo from './logo.svg';
import './App.css';
import MetalList from './component/MetalList';




function App() {
  return (
    <div className="APP">
      <div className='metalDiv'>
        <img src="./images/kajal.avif"></img>
        <h2>Name:kajal</h2>
        <h2>Age:31</h2>
        <h2>proffesion:metal</h2>
      </div>




  
      

      <div className='metalDiv'>
        <img src="./images/anupama.webp"></img>
        <h2>Name:anupama</h2>
        <h2>Age:33</h2>
        <h2>proffesion:metal</h2>
      </div>




      <div className='metalDiv'>
        <img src="./images/krithi.jpg"></img>
        <h2>Name:krithi</h2>
        <h2>Age:36</h2>
        <h2>proffesion:metal</h2>
      </div>


      <div className='metalDiv'>
        <img src="./images/kriti.jpg"></img>
        <h2>Name:kriti</h2>
        <h2>Age:30</h2>
        <h2>proffesion:metal</h2>
      </div>



      <div className='metalDiv'>
        <img src="./images/leela.jpg"></img>
        <h2>Name:leela</h2>
        <h2>Age:28</h2>
        <h2>proffesion:metal</h2>
      </div>



      <div className='metalDiv'>
        <img src="./images/patel.jpg"></img>
        <h2>Name:patel</h2>
        <h2>Age:29</h2>
        <h2>proffesion:metal</h2>
      </div>



      <div className='metalDiv'>
        <img src="./images/rakul.jpg"></img>
        <h2>Name:rakul</h2>
        <h2>Age:36</h2>
        <h2>proffesion:metal</h2>
      </div>



      <div className='metalDiv'>
        <img src="./images/rashmika.jpg"></img>
        <h2>Name:rashmika</h2>
        <h2>Age:32</h2>
        <h2>proffesion:metal</h2>
      </div>



      <hr></hr>



      <MetalList name="rithika" age="32" proffessionName="metal" pic="./images/rithika.jpg"></MetalList>
      <MetalList name="rashmika" age="36" proffessionName="metal" pic="./images/rashmika.jpg"></MetalList>
      <MetalList name="rakul" age="29" proffessionName="metal" pic="./images/rakul.jpg"></MetalList>
      <MetalList name="patel" age="28" proffessionName="metal" pic="./images/patel.jpg"></MetalList>
      <MetalList name="leela" age="30" proffessionName="metal" pic="./images/leela.jpg"></MetalList>
      <MetalList name="kriti" age="36" proffessionName="metal" pic="./images/kriti.jpg"></MetalList>
      <MetalList name="krithi" age="33" proffessionName="metal" pic="./images/krithi.jpg"></MetalList>
      <MetalList name="anupama" age="31" proffessionName="metal" pic="./images/anupama.webp"></MetalList>





      
      </div>



      


      



    
    


    
  );
}

export default App;
