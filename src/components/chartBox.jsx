import React from 'react';
import '../assets/styles/chartBoxOne.css';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export default function ChartBoxContainer() {
    return (
        <>
            <div className='mainContent'>
                <Tabs>
                    <TabList className="tabList">
                        <Tab>Efficiency</Tab>
                        <Tab>Volume</Tab>
                        <Tab>Customer Satisfaction</Tab>
                        <Tab>Backlog</Tab>
                    </TabList>

                    <TabPanel>
                        <Efficiency />
                    </TabPanel>

                </Tabs>
            </div>
        </>
    )

}


const Efficiency = () => {
    return (
        <>
            <div className='tabpanelHeader'>
                <div className='tpanelRowOne'>
                    <p className='tpanelTitle'>Efficiency Analytics</p>
                </div>

                <div className='tpanelRow'>

                    <div className='tpanelSearchWrapper'>
                        <input type="text" placeholder="Search" className="tpanelSearch" />
                    </div>


                    <div>
                        <select name='Filter Options' className='selectOption'>
                            <option value="option 1">option 1</option>
                            <option value="option 2">option 2</option>
                            <option value="option 3">option 3</option>
                        </select>
                    </div>

                    <div>
                        <button className='tpanelBtn'>Export</button>
                    </div>
                </div>

            </div>
        </>
    )
}