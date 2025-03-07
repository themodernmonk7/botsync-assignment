"use client"

import { createContext, useContext, useState } from "react"
const TabContext = createContext()

const Tabs = ({ children, defaultIndex, className }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState(defaultIndex)

  const handleSelectTab = (index) => {
    setCurrentActiveTab(index)
  }

  const value = {
    currentActiveTab,
    handleSelectTab,
  }
  return (
    <TabContext.Provider value={value}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  )
}

export default Tabs

export const useTabs = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error(`Component should be used within the Tabs component`)
  }
  return context
}
