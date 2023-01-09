
import tagData from '../../data/tags.json'
import projectData from '../../data/projects.json'

export async function load() {
  const getProjects = () => {
    const topFeatured = projectData[0]
    const sortedData = projectData.map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
    let lastUpdated = null
    let i = 0
    while (lastUpdated === null && i < sortedData.length) {
      if (sortedData[i].title !== topFeatured.title) {
        lastUpdated = sortedData[i]
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
      projectData: getProjects()
    }
  }
}
