import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends React.Component{
  state={image:'',loading:false};
  constructor(props){
    super(props);
  this.inputRef=React.createRef();
  }
  fileInput=(e)=>{
    this.setState({loading:true});
    setTimeout(function() {
        this.setState({image:URL.createObjectURL(e.target.files[0])});
        this.setState({loading:false});
    }.bind(this),2000);
  }
  fileUpload=()=>{
      this.inputRef.current.click();
  }
  render(){
    return(
      <div className='bg'>
           <nav >
 <div style={{borderBottom:'1px solid #33333'}}>
            <h1 style={{fontFamily:'Pacifico',fontSize:'54px',marginLeft:'35px',marginTop:'10px',float:'left'}}>Skinned</h1>
           <button type="button" className="btn btn-link" style={{color:'black',float:'right',marginTop:'10px'}}>Our Concept</button>
           <button type="button" className="btn btn-link" style={{color:'black',float:'right',marginTop:'10px'}}>Our Team</button>
      </div>

           </nav>

         <div className='container'>

{
   this.state.loading ? <div style={{marginTop:'20%',marginLeft:'20%'}}><CircularProgress />
   <p style={{color:'grey',marginTop:'15px'}}>Analysing The Image....</p></div>:
  this.state.image===''?
     <div className='home' style={{marginTop:'250px'}}>
     <h4 style={{fontFamily:'Texturina',marginBottom:'30px',color:'grey'}}>Get All Details About Your Skin Disesase By<br/>  Just Uploading A Photo.</h4>

              <input type='file' hidden ref={this.inputRef} onChange={this.fileInput}/>

              <button type="button" onClick={this.fileUpload} className="btn btn-primary btn-lg" style={{borderRadius:'24px'}}>
              <font style={{fontFamily:'Courgette',fontSize:'34px',padding:'20px'}}>
               Upload Image
               </font>
            </button>
   </div>:
<div className='flex-container shadow'>
<div>
<img className='image' src={this.state.image}  alt='Image Type Not Supported..'/>
</div>
<div className='description'>
<h4><b>Disease</b> <p style={{color:'red'}}>Melanoma</p></h4>
<h3 style={{fontFamily:'Georgia'}}><b>Causes</b></h3>

<p style={{fontFamily:'Castoro',fontSize:'24'}}>Melanoma occurs when something goes wrong in the melanin-producing cells (melanocytes) that give color to your skin.
Normally, skin cells develop in a controlled and orderly way — healthy new cells push older cells toward your skin's surface,
where they die and eventually fall off. But when some cells develop DNA damage, new cells may begin to grow out of control and
can eventually form a mass of cancerous cell.</p>

<h3 style={{fontFamily:'Georgia'}}><b>Risk Factors</b></h3>
<ul>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>A history of sunburn</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Excessive ultraviolet (UV) light exposure.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Weakened immune system.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>A family history of melanoma</li>
</ul>

<h3 style={{fontFamily:'Georgia'}}><b>Prevention</b></h3>
<ul>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Avoid the sun during the middle of the day.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Wear sunscreen year-round.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Wear protective clothing.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Avoid tanning lamps and beds.</li>
<li  style={{fontFamily:'Castoro',fontSize:'24'}}>Become familiar with your skin so that you'll notice changes</li>
</ul>

</div>

</div>
 }


      </div>
      </div>
    )
  }
}
export default App;
