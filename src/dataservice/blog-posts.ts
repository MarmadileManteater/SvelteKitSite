import type { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/dist/models/blog'
import sqlite3 from 'sqlite3'

export function getBlogPostById(postId: string) : Promise<IBlogPost> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./sqllite3.db', (err) => {
      if (err) {
        return reject(err)
      }
      db.all(`SELECT id,name
        FROM postsXtags
        WHERE id = ?`, [postId], (err, tags) => {
        if (err) {
          return reject(err)
        }
        db.get(`SELECT * FROM posts
          WHERE id = ?`, [postId], (err, row) => {
          if (err) {
            return reject(err)
          }
          const post =  {
            id: row.id,
            title: row.title,
            html: row.html,
            shortDescription: row.short_description,
            gittime: row.git_time,
            tags: tags.filter(({id}) => id === row.id).map(({name}) => name),
            type: 'IBlogPost'
          } as IBlogPost
          resolve(post)
        })
      })
    })
  })
}

export function getAllBlogPostsSorted() : Promise<IBlogPost[]> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./sqllite3.db', (err) => {
      if (err) {
        return reject(err)
      }
      db.all(`SELECT *
        FROM postsXtags`, [], (err, tags) => {
        if (err) {
          return reject(err)
        }
        db.all(`SELECT * FROM posts
          ORDER BY git_time DESC`, (err, rows) => {
          if (err) {
            return reject(err)
          }
          const posts = []
          for (let i = 0; i < rows.length; i++) {
            const row = rows[i]
            if (row) {
              const post =  {
                id: row.id,
                title: row.title,
                html: row.html,
                shortDescription: row.short_description,
                gittime: row.git_time,
                tags: tags.filter(({id}) => id === row.id).map(({name}) => name),
                type: 'IBlogPost'
              } as IBlogPost
              posts.push(post)
            }
          }
          resolve(posts)
        })
      })
    })
    db.close()
  })
}
