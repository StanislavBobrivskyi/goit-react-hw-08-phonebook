import { FallingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      marginTop: '100px',
    }}
  >
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  </div>
);
