import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    {/* ... */}
    <div>
      <p>トップページのメインコンテンツ！</p>
      <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
        Tailwind test
      </button>
      {/* ... */}
    </div>
  </Layout>
)