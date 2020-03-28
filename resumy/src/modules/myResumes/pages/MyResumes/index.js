import React, { Fragment, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, message } from 'antd';
import capitalize from 'lodash.capitalize';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// Layouts
import { MainLayout } from '../../../../ui/layouts/MainLayout';

// Styled Components
import { UploadContainer } from './styled';

// Constants - Antd
const { Title, Paragraph, Text } = Typography;

export const MyResumes = () => {
  const onDrop = acceptedFiles => {
    console.log('MyResumes -> acceptedFiles', acceptedFiles);
    const [file] = acceptedFiles;

    if (file.type !== 'application/json') {
      message.error('Only JSON files allowed');
    }

    const success = function(content) {
      const parsedResult = Object.entries(JSON.parse(content));
      setJsonResume(parsedResult);
    };

    const fileReader = new FileReader();

    fileReader.onload = function(event) {
      success(event.target.result);
    };

    fileReader.readAsText(file);

    // Do something with the files
  };

  const [jsonResume, setJsonResume] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <MainLayout>
      <Title level={3}>Import your JSON</Title>
      <UploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop JSON</p>}
      </UploadContainer>

      <Title level={3}>Uploaded Resume</Title>
      {!jsonResume && <p>No resume uploaded yet</p>}

      {jsonResume &&
        jsonResume.slice(0, 2).map(([title, data]) => {
          console.log('MyResumes -> title', title);
          console.log('MyResumes -> data', data);

          return (
            <Fragment key={title}>
              <Title level={4}>{capitalize(title)}</Title>

              {title === 'basics' && (
                <Fragment>
                  <Paragraph>
                    <Text strong>Name:</Text> {data.name}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Profession:</Text> {data.label}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Email:</Text> {data.email}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Phone:</Text> {data.phone}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Summary:</Text> {data.summary}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Address:</Text> {data.location.address}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Postal Code:</Text> {data.location.postalCode}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>City:</Text> {data.location.city}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Region:</Text> {data.location.region}
                  </Paragraph>
                  <Paragraph className='profile-title'>Profiles ({data.profiles.length})</Paragraph>
                  {data.profiles.map(profile => (
                    <div key={profile.url} className='profile-container'>
                      <Paragraph>
                        <Text strong>Network:</Text> {profile.network}
                      </Paragraph>
                      <Paragraph>
                        <Text strong>Username:</Text>: {profile.username}
                      </Paragraph>
                      <Paragraph>
                        <Text strong>Link:</Text> {profile.url}
                      </Paragraph>
                    </div>
                  ))}
                </Fragment>
              )}

              {title === 'work' &&
                data.map(workExp => (
                  <Fragment key={workExp.company}>
                    <Paragraph>
                      <Text strong>Company:</Text> {workExp.company}
                    </Paragraph>
                    <Paragraph>
                      <Text strong>Position:</Text> {workExp.position}
                    </Paragraph>
                    <Paragraph>
                      <Text strong>Website:</Text> {workExp.website}
                    </Paragraph>
                    <Paragraph>
                      <Text strong>Start Date:</Text> {workExp.startDate}
                    </Paragraph>
                    <Paragraph>
                      <Text strong>End Date:</Text> {workExp.endDate}
                    </Paragraph>
                    <Paragraph>
                      <Text strong>Summary:</Text> {workExp.summary}
                    </Paragraph>
                    <Paragraph className='highlights-title'>Highlights ({workExp.highlights.length})</Paragraph>
                    {workExp.highlights.map(highlight => (
                      <Paragraph key={highlight}>
                        <Text strong>Hightlight:</Text> {highlight}
                      </Paragraph>
                    ))}
                  </Fragment>
                ))}
            </Fragment>
          );
        })}

      <Title level={3}>My Resumes (beta)</Title>
    </MainLayout>
  );
};
