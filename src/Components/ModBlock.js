import React from 'react'

const ModBlock = (props) => {
  let { update } = props;

  return (
    <div className="mod-block">
      {
        update.split("\n").map(line => {
          if (line.includes("### ")) {
            let newLine = line.replace("### ", "")
            return <h4>{newLine}</h4>
          } else if (line.includes("## ")) {
            let newLine = line.replace("## ", "")
            return <h3>{newLine}</h3>
          } else if (line.includes("# ")) {
            let newLine = line.replace("# ", "")
            return <h2>{newLine}</h2>
          } else {
            return <p>{line}</p>
          }
        })
      }
    </div>
  )
}

export default ModBlock
