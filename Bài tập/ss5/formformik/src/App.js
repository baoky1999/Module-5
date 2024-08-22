import React, {useState} from "react";
import {Formik} from "formik";
import "./App.css";

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const [form, setForm] = useState({})

    // function handleChange(event) {
    //     setForm({
    //         ...form,
    //         [event.target.name]: event.target.value
    //     });
    // }

    function handleValidate(values) {
        const errors = {};
        if (!values.name) {
            errors.name = "Không được để trống";
        }
        if (!values.email) {
            errors.email = "Không được để trống";
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Email chưa đúng định dạng";
        }
        if (!values.phone) {
            errors.phone = "Không được để trống";
        }
        return errors;
    }

    const handleSubmit = (values, { resetForm }) => {
        setForm(values);
        alert("Thêm thông tin liên hệ thành công");
        resetForm();
    };

    return (
        <div>
            <h1>Thông tin liên hệ</h1>
            <Formik
                initialValues={{ name: '', email: '', phone: '', description: '' }}
                validate={handleValidate}
                onSubmit={handleSubmit}>
                {({errors, handleSubmit,handleChange,values}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Tên</label>
                            <input type="text" name="name" value={values.name} onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="text" name="email" value={values.email} onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>
                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Số điện thoại</label>
                            <input type="text" name="phone" value={values.phone} onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div>
                            <label>Tên</label>
                            <textarea name="description" value={values.description}  onChange={handleChange}/>
                        </div>
                        <button type="submit">Thêm mới</button>
                    </form>
                )}
            </Formik>
            {form && (
                <div>
                    <h2>Thông tin vừa được gửi:</h2>
                    <p><strong>Tên:</strong> {form.name}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Số điện thoại:</strong> {form.phone}</p>
                    <p><strong>Mô tả:</strong> {form.description}</p>
                </div>
            )}
        </div>
    );
}