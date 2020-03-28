import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Input, Button, Typography, Steps, message } from 'antd';

// Layouts
import { MainLayout } from '../../../../ui/layouts/MainLayout';

// Styled components
import { Container, Label } from './styled';

// Constants - Antd
const { Step } = Steps;
const { Title, Paragraph, Text } = Typography;

const steps = [
  {
    title: 'Basics',
    content: 'basics',
  },
  {
    title: 'Work',
    content: 'work',
  },
  {
    title: 'Finish',
    content: 'Finish',
  },
];

// Constants - Formik
const BASIC_VALUES = {
  username: '',
  label: '',
  email: '',
  phone: '',
  website: '',
  summary: '',
  address: '',
  postalCode: '',
  city: '',
  countryCode: '',
  region: '',
};

const WORK_VALUES = {
  company: '',
  position: '',
  website: '',
  startDate: '',
  endDate: '',
  summary: '',
};

const INITIAL_VALUES = {
  ...BASIC_VALUES,
  ...WORK_VALUES,
};

export const CreateResume = () => {
  // React hooks
  const [current, setCurrent] = useState(0);

  // Router hooks
  const history = useHistory();

  // Handlers
  const handleSubmit = values => {
    setCurrent(prevCurrent => prevCurrent + 1);
    message.success('Resume created successfully!');

    setTimeout(() => {
      history.push('/my-resumes');
    });
  };

  // Formik hooks
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
  });

  return (
    <MainLayout>
      <Container>
        <Title level={3}>Create your resume! (beta)</Title>

        <Paragraph>The form is divided into 2 steps</Paragraph>
        <Paragraph>Further ahead will be 10 steps to be JSON Schema compliant</Paragraph>

        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <form name='resume' onSubmit={formik.handleSubmit}>
          {current === 0 && (
            <>
              <Label htmlFor='username'>Username</Label>
              <Input
                id='username'
                name='username'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.username}
              />

              <Label htmlFor='profession'>Profession</Label>
              <Input id='label' name='label' type='text' onChange={formik.handleChange} value={formik.values.label} />

              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' type='email' onChange={formik.handleChange} value={formik.values.email} />

              <Label htmlFor='phone'>Phone</Label>
              <Input id='phone' name='phone' type='tel' onChange={formik.handleChange} value={formik.values.phone} />

              <Label htmlFor='website'>Website</Label>
              <Input
                id='website'
                name='website'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.website}
              />

              <Label htmlFor='summary'>Summary</Label>
              <Input
                id='summary'
                name='summary'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.summary}
              />

              <Label htmlFor='address'>Address</Label>
              <Input
                id='address'
                name='address'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.address}
              />

              <Label htmlFor='postalCode'>Postal Code</Label>
              <Input
                id='postalCode'
                name='postalCode'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />

              <Label htmlFor='city'>City</Label>
              <Input id='city' name='city' type='text' onChange={formik.handleChange} value={formik.values.city} />

              <Label htmlFor='countryCode'>Country Code</Label>
              <Input
                id='countryCode'
                name='countryCode'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.countryCode}
              />

              <Label htmlFor='region'>Region</Label>
              <Input
                id='region'
                name='region'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.region}
              />

              <Button type='primary' onClick={() => setCurrent(prevCurrent => prevCurrent + 1)}>
                Next step
              </Button>
            </>
          )}

          {current === 1 && (
            <>
              <Label htmlFor='company'>Company</Label>
              <Input
                id='company'
                name='company'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.company}
              />

              <Label htmlFor='website'>Website</Label>
              <Input
                id='website'
                name='website'
                type='website'
                onChange={formik.handleChange}
                value={formik.values.website}
              />

              <Label htmlFor='startDate'>Start Date</Label>
              <Input
                id='startDate'
                name='startDate'
                type='tel'
                onChange={formik.handleChange}
                value={formik.values.startDate}
              />

              <Label htmlFor='endDate'>End Date</Label>
              <Input
                id='endDate'
                name='endDate'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.endDate}
              />

              <Label htmlFor='summary'>Summary</Label>
              <Input
                id='summary'
                name='summary'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.summary}
              />

              <Button type='primary' onClick={() => setCurrent(prevCurrent => prevCurrent - 1)}>
                Prev step
              </Button>

              <Button type='primary' onClick={formik.handleSubmit}>
                Submit
              </Button>
            </>
          )}
        </form>
      </Container>
    </MainLayout>
  );
};
