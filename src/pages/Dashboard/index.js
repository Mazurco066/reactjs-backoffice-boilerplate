// Components
import { Row, Col } from 'antd'
import { Line, Pie } from '@ant-design/charts'

// Page
export default function Dashboard() {

  // Mock data
  const lineChartData = [
    { year: '1991', value1: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ]

  const pieChartData = [
    { type: '1991', value: 27 },
    { type: '1992', value: 25 },
    { type: '1993', value: 18 },
    { type: '1994', value: 15 },
    { type: '1995', value: 10 },
    { type: '1996', value: 5 }
  ]

  // JSX
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h3>Dashboard page</h3>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 16, marginTop: 16 }}>
        <Col span={24}>
          <Line
            data={lineChartData}
            height={400}
            xField="year"
            yField="value"
            point={{
              size: 5,
              shape: 'diamond'
            }}
            label={{
              style: { fill: '#aaa' }
            }}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 16, marginTop: 16 }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Pie
            data={pieChartData}
            appendPadding={10}
            angleField="value"
            colorField="type"
            radius={0.8}
            label={{
              type: 'spider',
              labelHeight: 28,
              content: '{name}\n{percentage}',
            }}
            interactions={[{ type: 'element-selected' }, { type: 'element-active' }]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus 
            aliquam lacus, ut condimentum mauris convallis et. Curabitur tristique tristique 
            odio. Morbi sed sem odio. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Fusce pellentesque odio sem, in euismod sapien vestibulum nec. Nunc hendrerit, 
            diam nec lobortis finibus, sapien nisi feugiat nisi, eu laoreet metus arcu at 
            diam. Donec mauris ligula, pellentesque vitae felis non, eleifend porttitor ante. 
            Pellentesque non metus eu diam venenatis pulvinar a a nisi. Sed non bibendum est. 
            Nulla pellentesque ipsum nec elit egestas, quis porttitor nunc vulputate. Fusce vel 
            ante nec eros scelerisque tristique. Mauris nisi urna, semper ut congue nec, vehicula 
            vitae quam. Vestibulum felis ante, ultrices sed tempor pulvinar, fringilla ultrices 
            ligula. Proin ac nulla ante.  Fusce sodales ex ac lacus sollicitudin efficitur. 
            Sed accumsan, tortor sed tristique  lobortis, odio lorem molestie dolor, 
            vitae sollicitudin mi nisl sed ligula.
          </p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p>
            Mauris nisi urna, semper ut congue nec, vehicula vitae quam. Vestibulum felis ante,
            ultrices sed tempor pulvinar, fringilla ultrices ligula. Proin ac nulla ante. 
            Fusce sodales ex ac lacus sollicitudin efficitur. Sed accumsan, tortor sed tristique 
            lobortis, odio lorem molestie dolor, vitae sollicitudin mi nisl sed ligula. 
            Nunc elementum eget nisl ac lacinia. Ut porttitor vel nisi eu vestibulum. Nam 
            consectetur velit tortor, et maximus felis lacinia fringilla. Vestibulum volutpat 
            commodo orci vel pharetra. Maecenas laoreet odio et elit efficitur dignissim. Integer 
            vitae efficitur lectus. Nam arcu ipsum, mattis non mi non, blandit tempor metus.
          </p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p>
            Pellentesque non metus eu diam venenatis pulvinar a a nisi. Sed non bibendum est. 
            Nulla pellentesque ipsum nec elit egestas, quis porttitor nunc vulputate. Fusce vel 
            ante nec eros scelerisque tristique. Ut mattis cursus magna id auctor. Quisque in 
            imperdiet metus, eu placerat velit. Integer cursus pretium mattis. Nunc sed hendrerit 
            arcu. Cras sit amet facilisis lacus. Ut id luctus dui. Ut fringilla mauris a odio 
            mattis, fringilla tincidunt nisl interdum.
          </p>
        </Col>
      </Row>
    </>
  )
}