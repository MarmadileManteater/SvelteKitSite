
import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'

import tagData from '../../data/tags.json'
import projectData from '../../data/projects.json'

import { getSocialPosts } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/social-posts'

export async function load() {
  const getProjects = () => {
    const topFeatured = projectData[0]
    const sortedData = projectData.map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
    let lastUpdated: IProject|null = null
    let i = 0
    while (lastUpdated === null && i < sortedData.length) {
      if (sortedData[i].title !== topFeatured.title) {
        lastUpdated = sortedData[i] as IProject
      }
      i++
    }
    if (lastUpdated === null)
      return [topFeatured]
    return [topFeatured, lastUpdated]
  }
  return {
    props: {
      tagData,
      projectData: getProjects(),
      postData: ((await getSocialPosts(0, 3)))
    }
  }
}
