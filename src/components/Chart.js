import React, { useEffect, useState } from 'react'
import {Button, Input, message, Space} from 'antd'
import { QuestionOutlined } from '@ant-design/icons';

import Plot from 'react-plotly.js'
import useWindowDimensions from './WindowHelper'
import InfoDrawer from './InfoDrawer';

const math = require('mathjs')

function Chart() {
    const { height, width } = useWindowDimensions()
    const [rawfunc, setRawfunc] = useState("-4x/(x^2+y^2+1)")
    const [visible, setVisible] = useState(false)

    const [chartData, setChartData] = useState()
    const [chartLayout, setChartLayout] = useState({
        width,
        height,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: {
            family: 'Questrial'
        },
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 0
        },
        hoverlabel: {
            bgcolor: 'black',
            bordercolor: 'black',
            font: {
                color: 'white',
                family: 'Questrial'
            }
        },
        scene: {
            xaxis: { color: "#aaa" },
            yaxis: { color: "#aaa" },
            zaxis: { color: "#aaa" },
        }
    })

    useEffect(() => {
        compileFunc()
    }, [])

    useEffect(() => {
        setChartLayout({
            ...chartLayout,
            width,
            height
        })
    }, [height, width])

    const compileFunc = () => {
        if(rawfunc === "") return message.error('Missing function')

        const node = math.parse(rawfunc)
        const comp = node.compile()

        let test = {x: 0, y: 0}
        
        try {
            comp.evaluate(test)
        } catch(err) {
            return message.error('Could not compile function')
        }

        generateChartData(comp)
    }

    const generateChartData = (comp) => {
        const start = -10
        const stop = 10

        let z_data = [];

        for(let x=start; x<=stop; x++) {
            let cur_z = []

            for(let y=start; y<=stop; y++) {
                cur_z.push(comp.evaluate({x,y}))
            }

            z_data.push(cur_z)
        }
        
        setChartData([{
            z: z_data,
            type: 'surface',
            showscale: false,
        }])
    }

    // Drawer handlers
    const closeDrawer = () => {
        setVisible(false)
    }

    if(chartData) return (
        <>
            <Plot
                data={chartData}
                layout={chartLayout}
                config={{responsive: true}}
            />

            <InfoDrawer visible={visible} closeDrawer={closeDrawer}/>

            <div className="bot-div">
                <Space>
                    <Input
                        addonBefore="f(x,y)="
                        value={rawfunc}
                        onChange={e => setRawfunc(e.target.value)}
                    />

                    <Button onClick={compileFunc}>Compile</Button>
                    <Button onClick={() => setVisible(true)} icon={<QuestionOutlined/>}/>
                </Space>
            </div>
        </>
    )

    return (
        <p></p>
    )
}

export default Chart
