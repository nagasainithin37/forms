import { useForm } from 'react-hook-form'
import { useState } from 'react';
function App() {

  let [objs,setObjs]=useState([])
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmitButton=(obj)=>{
    console.log(obj)
    setObjs([...objs,obj])
  }
  return (
    <div >  
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmitButton)}>
        {/*  email is made required and an error ms is made to display */}
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" {...register('email',{required:true})} />
    {errors.email?.type==='required' && <p className="text-danger">* field is Mandatory</p> }
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" {...register('password',{required:true,minLength:'4'})}/>
    {errors.password?.type==='required' && <p className="text-danger">* field is Mandatory</p> }
     {errors.password?.type==='minLength' && <p className="text-danger">* min of 4 characters required</p> }
  </div>

  {/* check box type one individual */}
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('one')}/>
    <label className="form-check-label" >one</label>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck2" {...register('two')}/>
    <label className="form-check-label" >two</label>
  </div>
   <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck3" {...register('three')}/>
    <label className="form-check-label" >three</label>
  </div>
<hr />
  {/* check box type two */}

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck11" {...register('skills',{required:true})} value='four'/>
    <label className="form-check-label">four</label>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck21" {...register('skills')} value='five'/>
    <label className="form-check-label" >five</label>
  </div>
   <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck31" {...register('skills')} value ='six'/>
    <label className="form-check-label">size</label>
  </div>
   {errors.skills?.type==='required' && <p className="text-danger">* At least one skills is mandatory</p> }

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{objs.length===0 && <div className="display-1 text-center text-warning">No Entries present</div> }
{objs.length!=0 &&
  <table className="table">
{
    objs.map((ob,idx) => <tr key={idx} className="table">
      <td className="table-primary">{ob.email}</td>
      <td className="table-primary">{ob.password}</td>
      <td className="table-primary">{ob.one}</td>
      <td className="table-primary">{ob.two}</td>
      <td className="table-primary">{ob.three}</td>
      <td className="table-primary">{ob.skills}</td>
      </tr> )
 }
  </table>
}

    </div>
  );
}

export default App;
