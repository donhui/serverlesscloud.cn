import React from 'react'
import Layout from '@src/layouts'
import { graphql } from 'gatsby'
import SideMenu from '@src/components/SideMenu'
import { Box } from '@src/components/atoms'
import Markdown from '@src/components/Markdown'
import { Doc } from '@src/types'
import Helmet from '@src/components/Helmet'
import Content from '@src/components/Content'
import Breadcrumbs from '@src/components/Breadcrumbs'

import { config } from '@src/constants/docMenuConfig'

interface Props {
  data: {
    doc: Doc
  }
  pathContext: {
    docId: string
    currentPath: string
  }
  location: any
}

const DocPage = ({
  data: { doc },
  pathContext: { currentPath },
  location,
}: Props) => {
  return (
    <Layout>
      <Helmet
        title="Serverless Framework 文档 - Serverless"
        keywords={'Serverless,Serverless Framework,FaaS,函数计算,无服务器'}
        description="Serverless Framework 无服务器应用框架文档，使用方法和应用场景介绍。"
        location={location}
      />
      <Breadcrumbs>文档</Breadcrumbs>
      <Content>
        <Box mb={'40px'} width={[0.95, 0.95, 0.95, 0.3]}>
          <SideMenu menus={config} activeLinkTo={currentPath} />
        </Box>
        <Box pt={'30px'} pb={'30px'} width={[0.95, 0.95, 0.95, 0.66]}>
          <Markdown html={doc.html} />
        </Box>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query Doc($docId: String!) {
    doc: markdownRemark(id: { eq: $docId }) {
      id
      html
    }
  }
`

export default DocPage
