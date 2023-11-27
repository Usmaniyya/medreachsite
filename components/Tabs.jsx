import React, { useState} from 'react'

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0)

  return (
      <div>
       <div className="flex w-full space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`w-1/2 py-2 px-4 ${
              activeTab === index ? 'bg-indigo-700 outline-none border-none text-white' : 'bg-gray-300'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
      </div>
  )
}

export default Tabs
