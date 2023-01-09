
import tagData from '../../../data/tags.json'
import projectData from '../../../data/projects.json'

export async function load() {
  return {
    props: {
      tagData,
      projectData
    }
  }
}
