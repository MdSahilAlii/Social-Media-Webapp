'use client'
import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const AddPost = () => {

  const addPostSchema = Yup.object().shape({
    
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required'),
    user:Yup.string().required('Required')
    

   
  });
  

  const addPostForm = useFormik({

    initialValues: {
      name: '',
      user: '',
      community: '',
      content: ''

    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      // setTimeout(()=>{
      //   resetForm();
      // },3000)
      // send values to backend


      //making a request on backend to save data(axios is a library)
      axios.post('http://localhost:5000/post/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('Post Added Successfully');
          // router.push('/');



        }).catch((err) => {
          console.log(err);
        });
    },
    // validationSchema:SignupSchema
  });


  return (

    <div className='bg-gray-900 h-screen'>

      <div className='flex justify-center py-20 '>
        <div className={"form-container"} >
          <form className="form " onSubmit={addPostForm.handleSubmit}>
            <div className="form-group">
              <label className='' htmlFor="email">Name</label>
              <input required="" id="name" onChange={addPostForm.handleChange} value={addPostForm.values.name} type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="user">User</label>
              <input id='user' type="text" onChange={addPostForm.handleChange} value={addPostForm.values.user} />
            </div>
            <div className="form-group">
              <label htmlFor="community">Community</label>
              <input id='community' type="text" onChange={addPostForm.handleChange} value={addPostForm.values.community}/>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea  id="content" onChange={addPostForm.handleChange} value={addPostForm.values.content}></textarea>
            </div>


            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddPost