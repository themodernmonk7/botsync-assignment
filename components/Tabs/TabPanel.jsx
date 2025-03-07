import React from "react"
import { useTabs } from "./Tabs"

const TabPanel = ({ children, className, index }) => {
  const { currentActiveTab } = useTabs()

  return currentActiveTab === index ? (
    <div className={className}> {children} </div>
  ) : null
}

export default TabPanel
