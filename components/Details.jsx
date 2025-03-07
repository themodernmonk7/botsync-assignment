"use client"

import { Tab, TabList, TabPanel, Tabs } from "@/components/Tabs"
import { TabsData } from "@/constants"
import { IoIosArrowForward } from "react-icons/io"
import { HiOutlinePencilSquare } from "react-icons/hi2"

const Details = () => {
  return (
    <section className="space-x-5">
      <div className="flex space-x-2 font-bold text-[#1D77FF] my-5">
        <HiOutlinePencilSquare size={24} />
        <p className=""> Application 001 </p>
      </div>
      <Tabs defaultIndex={3} className={"flex flex-col md:flex-row gap-x-20"}>
        <div className=" w-full md:w-1/3 lg:w-1/5">
          <TabList
            className={
              "scrollbar-hidden md:space-y-3 flex whitespace-nowrap md:block w-full overflow-x-auto space-x-5"
            }
          >
            {TabsData.map((tab, index) => (
              <Tab
                key={tab.id}
                index={index}
                activeTabStyle="bg-mango"
                inActiveTabStyle="bg-[#F2F2F2]"
                className={`rounded-lg px-5 md:px-6 py-3 md:py-4 flex justify-between items-center w-full capitalize font-normal text-left select-none cursor-pointer transition-all duration-300 delay-100 ease-in-out space-x-5 md:space-x-0 `}
              >
                <p>{tab.title}</p>
                <IoIosArrowForward size={20} />
              </Tab>
            ))}
          </TabList>
        </div>

        {TabsData.map((tab, index) => (
          <TabPanel
            className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0"
            key={tab.id}
            index={index}
          >
            <p className="font-semibold text-2xl leading-7 capitalize">
              {tab.title}
            </p>
            <p className="text-[#808080] leading-5">{tab.description}</p>
            {typeof tab.content === "function" ? (
              <tab.content data={tab} />
            ) : (
              tab.content
            )}
          </TabPanel>
        ))}
      </Tabs>
    </section>
  )
}

export default Details
