import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const Page = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      item: '',
      quantity: '',
      customer: ''
    },
    validationSchema: Yup.object({
      item: Yup
        .string("Must be a string")
        .max(255)
        .required('Item is required'),
      quantity: Yup
        .number("Must be a integer")
        .max(255)
        .required('Quantity is required'),
      customer: Yup
        .string("Must be a string")
        .max(255)
        .required('Username is required')
    }),
    onSubmit: (values, helpers) => {
      console.log(values);
      try {
        // await auth.signIn(values.item, values.quantity);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          MegaPort Kit
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <Typography variant="h4">
                  Create a new Order
          </Typography>
          <Box
          sx={{
            py: '20px'
          }}
        />
          <div>
              <form
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.item && formik.errors.item)}
                    fullWidth
                    helperText={formik.touched.item && formik.errors.item}
                    label="Item Name"
                    name="item"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.item}
                  />
                  <TextField
                    error={!!(formik.touched.quantity && formik.errors.quantity)}
                    fullWidth
                    helperText={formik.touched.quantity && formik.errors.quantity}
                    label="Quantity"
                    name="quantity"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.quantity}
                  />
                  <TextField
                    error={!!(formik.touched.customer && formik.errors.customer)}
                    fullWidth
                    helperText={formik.touched.customer && formik.errors.customer}
                    label="Username"
                    name="customer"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.customer}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={() => {}}
                >
                  Back
                </Button>
              </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Page;
