import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

function Medical() {
    const [formData, setFormData] = useState(
        {
            name: '',
            cmnd: '',
            dob: '',
            gender: '',
            country: '',
            company: '',
            working: '',
            insurance: false,
            city: '',
            district: '',
            ward: '',
            house: '',
            phone: '',
            email: '',
            descrip: '',
            token: [],
            contact: []
        }
    );

    const SEX_LIST = [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' }
    ];
    const TOKEN = [
        { label: 'Sốt', value: 'Sốt' },
        { label: 'Ho', value: 'Ho' },
        { label: 'Khó thở', value: 'Khó thở' },
        { label: 'Viêm phổi', value: 'Viêm phổi' },
        { label: 'Đau họng', value: 'Đau họng' },
        { label: 'Mệt mỏi', value: 'Mệt mỏi' }
    ];
    const CONTACT = [
        { label: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19', value: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19' },
        { label: 'Người từ nước có bệnh COVID-19', value: 'Người từ nước có bệnh COVID-19' },
        { label: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)', value: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)' },
    ];

    const objectValid = {
        name: Yup.string().required("Tên không được để trống"),
        cmnd: Yup.number().required("CMND không được để trống"),
        dob: Yup.number().required("Không được để trống ngày sinh").min(1900, "Năm sinh phải lớn hơn 1900"),
        country: Yup.string().required("Quốc gia không được để trống"),
        city: Yup.string().required("Tỉnh thành không được để trống"),
        district: Yup.string().required("Quận huyện không được để trống"),
        ward: Yup.string().required("Phường xã không được để trống"),
        house: Yup.string().required("Số nhà cụ thể không được để trống"),
        phone: Yup.string().required("Số điện thoại không được để trống"),
        email: Yup.string().required("Email không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng")
    };

    const saveMedical = (values, { resetForm }) => {
        setFormData(values);
        console.log(values)
        toast.success("Thêm mới thành công")
        resetForm();
    };

    return (
        <div>
            <Formik
                initialValues={formData}
                onSubmit={saveMedical}
                validationSchema={Yup.object(objectValid)}
            >
                <Form className="form-check">
                    <h2>Tờ khai y tế</h2>
                    <p>Họ tên</p>
                    <Field name="name" className="input-field"/>
                    <ErrorMessage name="name" component="p" className="error"/>
                    <p>Số hộ chiếu/CMND</p>
                    <Field name="cmnd" className="input-field"/>
                    <ErrorMessage name="cmnd" component="p" className="error"/>
                    <p>Năm sinh</p>
                    <Field name="dob" type="number" className="input-field"/>
                    <ErrorMessage name="dob" component="p" className="error"/>
                    <p>Giới tính</p>
                    <div className="radio-group">
                        {SEX_LIST.map((sex) => (
                            <div key={sex.value}>
                                <label>
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value={sex.value}
                                    />
                                    {sex.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    <ErrorMessage name="gender" component="p" className="error"/>
                    <p>Quốc tịch</p>
                    <Field name="country" className="input-field"/>
                    <ErrorMessage name="country" component="p" className="error"/>
                    <p>Công ty làm việc</p>
                    <Field name="company" className="input-field"/>
                    <ErrorMessage name="company" component="p" className="error"/>
                    <p>Bộ phận làm việc</p>
                    <Field name="working" className="input-field"/>
                    <ErrorMessage name="working" component="p" className="error"/>
                    <p className="insurance-label">
                        Có thẻ bảo hiểm y tế
                        <span>
                            <Field name="insurance" type="checkbox"/>
                        </span>
                    </p>
                    <ErrorMessage name="insurance" component="p" className="error"/>
                    <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                    <p>Tỉnh thành</p>
                    <Field name="city" className="input-field"/>
                    <ErrorMessage name="city" component="p" className="error"/>
                    <p>Quận / huyện</p>
                    <Field name="district" className="input-field"/>
                    <ErrorMessage name="district" component="p" className="error"/>
                    <p>Phường / xã</p>
                    <Field name="ward" className="input-field"/>
                    <ErrorMessage name="ward" component="p" className="error"/>
                    <p>Số nhà, phố, tổ dân phố / thôn / đội</p>
                    <Field name="house" className="input-field"/>
                    <ErrorMessage name="house" component="p" className="error"/>
                    <p>Điện thoại</p>
                    <Field name="phone" className="input-field"/>
                    <ErrorMessage name="phone" component="p" className="error"/>
                    <p>Email</p>
                    <Field name="email" className="input-field"/>
                    <ErrorMessage name="email" component="p" className="error"/>
                    <br/>
                    <h5>Trong vòng 14 ngày qua, Anh/chị có đến quốc gia / vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h5>
                    <Field name="descrip" as="textarea" className="input-field"/>
                    <h5>Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu nào sau đây không</h5>
                    <div>
                        {TOKEN.map((item) => (
                            <div key={item.value} className="checkbox-item">
                                <label>
                                    <Field
                                        className="field-name"
                                        type="checkbox"
                                        name="token"
                                        value={item.value}
                                    />
                                    <span className="text-nowrap">{item.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <h5>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với</h5>
                    <div>
                        {CONTACT.map((item) => (
                            <div key={item.value} className="checkbox-item">
                                <label>
                                    <Field
                                        className="field-name"
                                        type="checkbox"
                                        name="contact"
                                        value={item.value}
                                    />
                                    <span className="text-nowrap">{item.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            {formData && (
                <div className="form-summary">
                    <h2>Thông tin đã lưu</h2>
                    <p><strong>Họ tên:</strong> {formData.name}</p>
                    <p><strong>Số hộ chiếu/CMND:</strong> {formData.cmnd}</p>
                    <p><strong>Năm sinh:</strong> {formData.dob}</p>
                    <p><strong>Giới tính:</strong> {formData.gender}</p>
                    <p><strong>Quốc tịch:</strong> {formData.country}</p>
                    <p><strong>Công ty làm việc:</strong> {formData.company}</p>
                    <p><strong>Bộ phận làm việc:</strong> {formData.working}</p>
                    <p><strong>Có thẻ bảo hiểm y tế:</strong> {formData.insurance ? "Có" : "Không"}</p>
                    <p><strong>Địa chỉ liên lạc tại Việt Nam:</strong></p>
                    <p><strong>Tỉnh thành:</strong> {formData.city}</p>
                    <p><strong>Quận / huyện:</strong> {formData.district}</p>
                    <p><strong>Phường / xã:</strong> {formData.ward}</p>
                    <p><strong>Số nhà, phố, tổ dân phố / thôn / đội:</strong> {formData.house}</p>
                    <p><strong>Điện thoại:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mô tả quốc gia / vùng lãnh thổ đã đến:</strong> {formData.descrip}</p>
                    <p><strong>Dấu hiệu xuất hiện:</strong> {formData.token ? formData.token.join(", ") : "Không có"}</p>
                    <p><strong>Tiếp xúc với:</strong> {formData.contact ? formData.contact.join(", ") : "Không có"}</p>
                </div>
            )}
        </div>
    );
}

export default Medical;
