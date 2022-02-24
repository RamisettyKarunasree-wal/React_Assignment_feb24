import { useFormik } from "formik"

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: "dsfdsf@gmail.com",
            password: "pass",
            age: 21,
            fullName: "karunasree"
        },

        onSubmit(values) {
            if (localStorage.getItem("details")) {
                let arr = JSON.parse(localStorage.getItem("details"));
                arr.push(values);
                arr = JSON.stringify(arr);
                localStorage.setItem("details", arr);
            }
            else {
                let arr=[];
                arr.push(values);
                arr = JSON.stringify(arr);
                localStorage.setItem("details", arr);
            }
        },
        validate() {
            const errors = {};
            if (formik.values.email.length < 5) {
                errors.email = "Email must contain greater than 5 characters";
            }
            else if (formik.values.email.length > 30) {
                errors.email = "Email must contain less than 30 characters"
            }
            if (formik.values.password.length < 4) {
                errors.password = "Password must contain greater than 4 characters";
            }
            else if (formik.values.password.length > 20) {
                errors.password = "Password must contain less than 20 characters";
            }
            if (parseInt(formik.values.age) < parseInt(18)) {
                errors.age = `Age must be greater than 18`;
            }
            else if (parseInt(formik.values.age) > parseInt(120)) {
                errors.age = `Age must be less than 120`;
            }
            if (formik.values.fullName.length < 5) {
                errors.fullName = "Fullname must contain greater than 4 characters";
            }
            else if (formik.values.fullName.length > 20) {
                errors.fullName = "Fullname must contain less than 20 characters";
            }
            return errors;
        },
    })
    return (
        <div className="registration">
            <h1>Registration Form</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
                <table>
                    <tr><td>Enter Email:</td>
                        <td><input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter Email" /></td></tr>
                    <tr><td colSpan={2}><div className="error">{formik.errors.email ? formik.errors.email : null}</div></td></tr>
                    <tr><td>Enter Password:</td>
                        <td><input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter password" /></td></tr>
                    <tr><td colSpan={2}><div className="error">{formik.errors.password ? formik.errors.password : null}</div></td></tr>
                    <tr><td>Enter Age:</td>
                        <td><input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} placeholder="Enter Age" /></td></tr>
                    <tr><td colSpan={2}><div className="error">{formik.errors.age ? formik.errors.age : null}</div></td></tr>
                    <tr><td>Enter Full Name:</td>
                        <td><input type="text" name="fullName" value={formik.values.fullName} onChange={formik.handleChange} placeholder="Enter Full Name" /></td></tr>
                    <tr><td colSpan={2}><div className="error">{formik.errors.fullName ? formik.errors.fullName : null}</div></td></tr>
                </table>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Registration;