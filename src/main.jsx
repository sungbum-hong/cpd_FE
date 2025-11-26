import { createRoot } from 'react-dom/client'
import Layout from "./layout/Layout.jsx";
import './style/index.css';

const $root = document.getElementById('root')
const CR = createRoot($root)

CR.render(
  <Layout>
      <h1 className={'text-2xl'}>Test</h1>
  </Layout>,
)
