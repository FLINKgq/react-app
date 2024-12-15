import './App.css'
import MyComponent from './components/mycomponent';
import Snowflake from './components/snowflake/snowflake';
import XmasTree from './components/xmasTree/xmasTree';
import Snow from './components/snow/snow';


function App(){
  return(
  <>
    <div class = "top">
      <h1>Marry Christmas</h1>
      <MyComponent
        title="It's begining to look" 
        description="like Christmas"
      /> 
    </div>
    
    <Snowflake/>
     <Snow/> 
    
    </>
  )
}

export default App;
