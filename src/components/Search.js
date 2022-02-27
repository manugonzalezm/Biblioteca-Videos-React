import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

const Search = () => {
    const navigate = useNavigate()

    return (
            <Formik
                initialValues={{
                    videoName: '',
                }}
                validationSchema={Yup.object({
                    videoName: Yup.string()
                    .required(<span>Requerido</span>)
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        navigate(`/search/${values.videoName}`)
                    }, 400);
                }}
            >
                <Form
                    className="d-flex justify-content-center align-items-center"
                >
                    <TextInput 
                        label=""
                        name="videoName"
                        type="search"
                        placeholder="Buscar"
                    />
                    <button className="btn btn-outline-success">Buscar</button>
                </Form>
            </Formik>
    )
}

export default Search