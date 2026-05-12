import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import {useFormik} from "formik";
import {contactValidationSchema} from "../../validations/contact.validation";
import {EmailRounded, Face6Rounded, SubjectRounded} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = () => {
  const theme = useTheme();

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: contactValidationSchema,
  });


  return (
      <Grid container justifyContent="center">
        <Grid size={{xs: 12, sx: 12, md: 8}}>
          <Card sx={{justifyContent: "center", alignItems: "center", mt: 4}}>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <CardContent>
                <Grid container>
                  <Grid size={{xs: 12}} sx={{direction: "ltr"}}>
                    <Grid container spacing={2}>
                      <Grid size={{xs: 12, md: 6}}>
                        <TextField fullWidth size="small" color="warning" label="نام و نام خانوادگی"
                                   name="fullname" variant="outlined"
                                   helperText={formik.touched.fullname ? formik.errors.fullname : null}
                                   error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                   value={formik.values?.fullname}
                                   onChange={formik.handleChange}
                                   slotProps={{
                                     input: {
                                       endAdornment: (
                                           <InputAdornment position="end">
                                             <Face6Rounded/>
                                           </InputAdornment>
                                       )
                                     }
                                   }}
                        />
                      </Grid>
                      <Grid size={{xs: 12, md: 6}}>
                        <TextField fullWidth size="small" color="warning" label="ادرس ایمیل"
                                   name="email" variant="outlined"
                                   helperText={formik.touched.email ? formik.errors.email : null}
                                   error={Boolean(formik.touched.email && formik.errors.email)}
                                   value={formik.values?.email}
                                   onChange={formik.handleChange}
                                   slotProps={{
                                     input: {
                                       endAdornment: (
                                           <InputAdornment position="end">
                                             <EmailRounded/>
                                           </InputAdornment>
                                       )
                                     }
                                   }}/>
                      </Grid>
                      <Grid size={{xs: 12, md: 12}}>
                        <TextField fullWidth size="small" color="warning" label="عنوان"
                                   name="subject" variant="outlined"
                                   helperText={formik.touched.subject ? formik.errors.subject : null}
                                   error={Boolean(formik.touched.subject && formik.errors.subject)}
                                   value={formik.values?.subject}
                                   onChange={formik.handleChange}
                                   slotProps={{
                                     input: {
                                       endAdornment: (
                                           <InputAdornment position="end">
                                             <SubjectRounded/>
                                           </InputAdornment>
                                       )
                                     }
                                   }}/>
                      </Grid>
                      <Grid size={{xs: 12, md: 12}}>
                        <TextField fullWidth multiline rows={6} size="small" color="warning" label="متن پیام"
                                   name="message"
                                   helperText={formik.touched.message ? formik.errors.message : null}
                                   error={Boolean(formik.touched.message && formik.errors.message)}
                                   value={formik.values?.message}
                                   onChange={formik.handleChange}
                                   variant="outlined"/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{alignItems: "end", flexDirection: "column"}}>
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} hl="fa" theme={theme.palette.mode}
                           onChange={(value) => formik.setFieldValue("recaptcha", value)}/>
                {formik.errors.recaptcha && formik.touched.recaptcha && (
                    <Typography variant="caption" color="error">
                      {formik.errors.recaptcha}
                    </Typography>
                )}
                <Button type="submit" variant="contained" fullWidth color="success" sx={{mt: 2}}>کلیک کن</Button>
              </CardActions>
            </form>

          </Card>
        </Grid>
      </Grid>

  );
};

export default ContactForm;