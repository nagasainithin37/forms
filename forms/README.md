# Use forms

## To use form in react install react-hook-form

### import useFrom from react-hook-form

### const {register,handleSubmit,forms:{errors}}=useForm()

### <input {...register('name') } />

## To Submit

### use handleSubmit function

const onFormSubmit=(userObj)=>{
console.log(userObj)
}

<form onSubmit={handleSubmit(onFormSubmit)}>
</form>

## Set Validation

    required
    minLength
    MaxLength
    min
    max
    pattern

### {...required('name',{required:true,minLength:'4'})}

<input {...required('username'),{required:true}}/>
{errors.username?.type==='required' && <p classname='text-danger>\* It is a required field</p>}

## For Checkboxes

<input type='check-box' id="js" className="form-check-input" {...register('skills')} value='js'/>

<input type='check-box' id="react" className="form-check-input" {...register('skills')} value='react'/>

<input type='check-box' id="python" className="form-check-input" {...register('skills')} value='python'/>

## For keeping valdation like required select any one and keep validation for it for eg last one

<input type='check-box' id="js" className="form-check-input" {...register('skills')} value='js'/>

<input type='check-box' id="react" className="form-check-input" {...register('skills')} value='react'/>

<input type='check-box' id="python" className="form-check-input" {...register('skills'),{required:true}} value='python'/>
