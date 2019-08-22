import React from 'react'

const ModBlock = (props) => {
  let { update, selectedUpdate } = props;

  return (
    <div className="mod-block">
      {
        update.split("\n").map(line => {
          if (line.includes("#### ", "")) {
            let newLine = line.replace("#### ", "")
            return <span>{newLine}</span>
          } else if (line.includes("### ")) {
            let newLine = line.replace("### ", "")
            return <h4>{newLine}</h4>
          } else if (line.includes("## ")) {
            let newLine = line.replace("## ", "")
            return <h3 onClick={() => selectedUpdate(update)}>{newLine}</h3>
          } else if (!line.includes("# ")) {
            return <p>{line}</p>
          }
        })
      }
    </div>
  )
}

export default ModBlock
