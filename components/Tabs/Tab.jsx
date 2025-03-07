import React from "react"
import { useTabs } from "./Tabs"

const Tab = ({
  children,
  className,
  index,
  activeTabStyle = "bg-green-100",
  inActiveTabStyle = "bg-gray-200",
}) => {
  const { currentActiveTab, handleSelectTab } = useTabs()
  return (
    <button
      onClick={() => handleSelectTab(index)}
      className={`${className} ${
        currentActiveTab === index ? activeTabStyle : inActiveTabStyle
      }`}
    >
      {children}
    </button>
  )
}

export default Tab
