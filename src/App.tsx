

import { ConfigProvider, Empty } from 'antd';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppRoutes from './routers';
import Loading from './components/Loading';
import { HistoryRouter, history } from './utils/history';

function App() {
  return <HistoryRouter history={history}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#308CBA',
          borderRadius: 2,
        },
      }}
      renderEmpty={() => {
        return <Empty description={"No data available at the moment"} />
      }}
    >
      <Suspense fallback={<Loading />} >
        <AppRoutes />
      </Suspense>
    </ConfigProvider>

  </HistoryRouter >
}

export default App
