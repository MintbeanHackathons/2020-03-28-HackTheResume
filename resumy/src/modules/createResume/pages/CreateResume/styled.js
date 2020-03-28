import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;

  .ant-steps {
    padding: 18px 0;
  }

  .ant-btn {
    margin-top: 12px;

    ~ .ant-btn {
      margin-left: 4px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 12px;
`;
