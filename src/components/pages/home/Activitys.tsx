import * as React from 'react'
import { Box } from '@src/components/atoms'
import { Link } from 'gatsby'
import './Activitys.css'

interface Activity {
  cover: string
  title: any
  decription: string
  link: string
}

const activityList: Activity[] = [
  {
    cover: 'https://img.serverlesscloud.cn/2020113/1604401312765-fengmian.jpg',
    title: '11.11 云上盛典',
    decription: 'Serverless 云函数冰点折扣资源包限时抢购 1 元/月起',
    link: 'https://cloud.tencent.com/act/double11?from=13609',
  },
  {
    cover: 'https://img.serverlesscloud.cn/2020720/1595233528915-1588164013282-banner_hours%20%281%29.jpg',
    title: 'Tencent Serverless Hours | 第 11 期',
    decription: '使用 Custom Runtime 拓展云函数编程语言',
    link: '/blog/2020-11-20-webinar-meetup',
  },
  {
    cover: 'https://main.qcloudimg.com/raw/3cb7b20955d78ced738e0279bb3f6f41.jpg',
    title: '社区调查：Serverless 使用率大幅增长',
    decription: '在开发社区进行的问卷调查，Serverless 的使用率增长连我们自己都惊讶不已！',
    link: '/blog/2018-07-19-2018-serverless-community-survey-huge-growth-usage/',
  },
]

function ActivityCard({ activity }: { activity: Activity }) {
  const isExternal = activity.link.startsWith('https://')
  const main = (
    <React.Fragment>
      <Box className="scf-article-item__img">
        <img src={activity.cover} alt={activity.title} />
      </Box>
      <Box className="scf-article-item__content">
        <Box className="scf-article-item__title">
          <h4>{activity.title}</h4>
        </Box>
        <Box className="scf-article-item__intro">{activity.decription}</Box>
      </Box>
    </React.Fragment>
  )
  return (
    <Box className="scf-article-item">
      {isExternal ? (
        <a href={activity.link} target="_blank">
          {main}
        </a>
      ) : (
        <Link to={activity.link}>{main}</Link>
      )}
    </Box>
  )
}

function ActivityCards() {
  return (
    <Box className="scf-box__body">
      {activityList.map(activity => (
        <ActivityCard key={activity.title} activity={activity} />
      ))}
    </Box>
  )
}

export default function() {
  return (
    <Box className="scf-grid__item-8">
      <Box className="scf-grid__box">
        <Box className="scf-box scf-home-active">
          <Box className="scf-box__header">
            <Box className="scf-box__header-title size-s">
              <h3>活动</h3>
            </Box>
          </Box>
          <ActivityCards />
        </Box>
      </Box>
    </Box>
  )
}
