
import React from 'react';
import Layout from '../components/Layout';
import Dashboard from './Dashboard';
import { ThemeProvider } from '@/hooks/useTheme';

const Index = () => {
  return (
    <ThemeProvider>
      <Layout title="Dashboard">
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
