import back from '../Images/windows11.jpg';
import folder from '../Images/folder.png';

const Main = () =>{
    return (
         <div className="main">
        <img className='background' src={back} alt="BackGround"/>
        <img className='folder' src={folder} alt='folder'/>
         </div>
        );
};

export default Main;