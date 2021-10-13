import React from 'react'
import { Typography, Drawer, Divider } from 'antd'

const { Title, Paragraph, Text, Link } = Typography

function InfoDrawer({visible, closeDrawer}) {
    return (
        <Drawer
            width={450}
            onClose={closeDrawer}
            visible={visible}
            closable={false}
        >
            <Typography>
                <Title className="title-1">about</Title>
                <Paragraph>
                    Gradient descent visualizer for three dimensional functions. Plotly used for 3D graphing and math.js for expression parsing.<br/>Example usage: <Text code>f(x,y)=x^2 + y^2</Text>
                </Paragraph>

                <Title className="title-2">features</Title>
                <Paragraph>
                    <ul>
                        <li>plot 3D functions by writing expressions</li>
                        <li>
                            interactive graph controls
                            <li><Text code>Left-click</Text> to rotate</li>
                            <li><Text code>Right-click</Text> to pan</li>
                            <li><Text code>Scroll</Text> to zoom</li>
                        </li>
                    </ul>
                </Paragraph>

                <Divider/>

                <Title className="title-2">what is gradient descent</Title>
                <Paragraph>
                    Gradient descent is an optimization algorithm to find the minimum of a function. It is commonly used in neural networks.<br/><br/>Machine learning models have their performance measured by cost functions. Gradient descent is used to minimize the cost function by optimizing the weights and biases of the network. 
                </Paragraph>

                <Title className="title-2">general process</Title>
                <Paragraph>
                    <ol>
                        <li>Start with a random position on the function</li>
                        <li>Compute the gradient (partial derivative) at the given point</li>
                        <li>Move in a negative direction of the gradient</li>
                        <li>Repeat process until minima is reached, signified by minimal changes in position between steps</li>
                    </ol>

                    Note this will find local minima, not neccesarily the global.
                </Paragraph>                
            </Typography>
        </Drawer>
    )
}

export default InfoDrawer