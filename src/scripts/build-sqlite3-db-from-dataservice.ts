
import blogPosts from '@marmadilemanteater/gh-static-site-lib/dist/dataservice/blog-posts'
import tagData from '../../data/tags.json'
import sqlite3 from "sqlite3"
const { getAllBlogPostsSorted } = blogPosts
type Database = sqlite3.Database
;(async () => {
  sqlite3.verbose()
  const blogPosts = getAllBlogPostsSorted()
  const promiseDatabase = (input : string, permissions : number|undefined = undefined) : Promise<Database> => {
    return new Promise((resolve, reject) => {
      if (permissions) {
        const db = new sqlite3.Database(input, permissions, (err) => {
          if (err) {
            return reject(err)
          }
          resolve(db)
        })
      } else {
        const db = new sqlite3.Database(input, (err) => {
          if (err) {
            return reject(err)
          }
          resolve(db)
        })
      }
    })
  }
  const db = await promiseDatabase('./sqllite3.db')
  db.run(`CREATE TABLE tags (
    name VARCHAR KEY NOT NULL,
    link VARCHAR
  )`, (err) => {
    if (err) {
      console.error(err)
    }
    for (let i = 0; i < tagData.length; i++ ) {
      db.run(`INSERT INTO tags(name, link) VALUES(?,?)`, [tagData[i].name, tagData[i].link], (err) => {
        if (err) {
          console.error(err);
        }
      })
    }
  })

  db.run(`CREATE TABLE posts (
    id VARCHAR KEY NOT NULL,
    title VARCHAR,
    html VARCHAR,
    short_description VARCHAR,
    git_time INT,
    UNIQUE(id)
  )`, (err) => {
    if (err) {
      console.error(err)
    }
    db.run(`CREATE TABLE postsXtags (
      name VARCHAR NOT NULL,
      id VARCHAR NOT NULL,
      FOREIGN KEY (name) REFERENCES tags(name),
      FOREIGN KEY (id) REFERENCES posts(id),
      CONSTRAINT pk_postsXtagsId PRIMARY KEY (name,id)
    )`, (err) => {
      if (err) {
        console.error(err)
      }
    })
    for (let i = 0; i < blogPosts.length; i++) {
      db.run(`INSERT INTO posts(id,title,html,short_description,git_time) VALUES(?,?,?,?,?)`, [blogPosts[i].id, blogPosts[i].title, blogPosts[i].html, blogPosts[i].shortDescription, blogPosts[i].gittime], (err) => {
        if (err) {
          console.error(err);
        }

        for (let k = 0; k < blogPosts[i].tags.length; k++) {
          const tagName = blogPosts[i].tags[k]
          const tag = tagData.filter((tag) => {
            return tagName === tag.name
          })[0]
          if (tag)
            db.run(`INSERT INTO postsXtags(name, id) VALUES(?,?)`, [tag.name, blogPosts[i].id], (err) => {
              if (err) {
                console.error(err)
              }
            })
        }
      })
    }
  })

  
})()
